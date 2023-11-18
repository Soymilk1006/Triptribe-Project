import { Model } from 'mongoose';
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FileUploadService } from '@/file/file.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from './schema/restaurant.schema';
import { PhotoType } from '@/schema/photo.schema';
import { GlobalSearchDto } from '@/search/dto/globalSearch.dto';
import { UserIdDto } from '@/user/dto/userId.dto';
import { FileUploadDto } from '@/file/dto/file-upload.dto';
@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>,
    private readonly fileUploadService: FileUploadService
  ) {}

  async findAll(): Promise<Restaurant[]> {
    return await this.restaurantModel.find().exec();
  }

  async findOne(id: string): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.findById(id.toString()).exec();
    if (!restaurant) {
      throw new NotFoundException('this restaurant does not exist');
    }
    return restaurant;
  }

  async create(
    createRestaurantDto: CreateRestaurantDto,
    createdUserId: UserIdDto['_id'],
    files?: FileUploadDto[]
  ): Promise<Restaurant> {
    if (!files || !files.length) {
      const restaurant = {
        ...createRestaurantDto,
        createdUserId,
      };
      const createdRestaurant = new this.restaurantModel(restaurant);
      return await createdRestaurant.save();
    }
    const results = await this.fileUploadService.uploadPhoto(
      createdUserId,
      files,
      PhotoType.RESTAURANT
    );
    const photos = results.map((photo) => photo.data);

    const restaurant = {
      ...createRestaurantDto,
      photos,
      createdUserId,
    };

    const createdRestaurant = new this.restaurantModel(restaurant);
    return await createdRestaurant.save();
  }

  async update(
    id: string,
    updateRestaurantDto: UpdateRestaurantDto,
    createdUserId: UserIdDto['_id'],
    files?: FileUploadDto[]
  ): Promise<Restaurant> {
    const { photos: currentPhotos } = await this.verifyRestaurant(id, createdUserId);

    const restPhotos = currentPhotos.filter(
      (photo) => updateRestaurantDto.photos?.some((p) => p.imageUrl === photo.imageUrl)
    );

    if (!files || !files.length) {
      const updatedDto = { ...updateRestaurantDto, photos: restPhotos };
      const updatedRestaurant = await this.restaurantModel
        .findByIdAndUpdate(id, updatedDto, { new: true })
        .exec();
      if (!updatedRestaurant) {
        throw new NotFoundException('this restaurant does not exist');
      }
      return updatedRestaurant;
    }

    // update photos if adding new
    const results = await this.fileUploadService.uploadPhoto(
      createdUserId,
      files,
      PhotoType.RESTAURANT
    );
    const photos = results.map((photo) => photo.data);
    // TODO: update photos if photos order change
    const newPhotos = [...restPhotos, ...photos];
    const updatedDto = { ...updateRestaurantDto, photos: newPhotos };

    const updatedRestaurant = await this.restaurantModel
      .findByIdAndUpdate(id, updatedDto, { new: true })
      .exec();
    if (!updatedRestaurant) {
      throw new NotFoundException('this restaurant does not exist');
    }
    return updatedRestaurant;
  }

  // verify if editor is the creator of the restaurant
  async verifyRestaurant(id: string, userId: string) {
    const restaurant = await this.findOne(id);
    if (userId.toString() !== restaurant.createdUserId.toString()) {
      throw new ForbiddenException('You have no permission to access this resource!');
    }
    return restaurant;
  }

  async findByKeyword(searchInfoDto: GlobalSearchDto): Promise<Restaurant[]> {
    const { keyword, limit, maxDistance, location } = searchInfoDto;

    if (!location) {
      const restaurants = await this.restaurantModel
        .find({
          $or: [
            { name: { $regex: new RegExp(keyword, 'i') } },
            { description: { $regex: new RegExp(keyword, 'i') } },
          ],
        })
        .limit(limit)
        .lean()
        .exec();

      return restaurants;
    }

    const restaurants = await this.restaurantModel.aggregate([
      {
        $geoNear: {
          near: { type: 'Point', coordinates: [location.lng, location.lat] },
          distanceField: 'distance',
          spherical: true,
          maxDistance: maxDistance || 10000,
        },
      },
      {
        $match: {
          $or: [
            { name: { $regex: new RegExp(keyword, 'i') } },
            { description: { $regex: new RegExp(keyword, 'i') } },
          ],
        },
      },
      {
        $sort: {
          distance: 1,
        },
      },
      {
        $limit: limit,
      },
    ]);
    return restaurants;
  }
}
