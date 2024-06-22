import { NextPage } from 'next/types';
import MainPage from '@/sections/restaurant-attraction-page/main-page';
import { MainType } from '@/types/general';

const Page: NextPage = () => {
  return <MainPage type={MainType.Restaurant} />;
};

export default Page;
