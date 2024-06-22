import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputAdornment,
  OutlinedInput,
  Radio,
  RadioGroup,
  Rating,
  Slider,
  Stack,
  SvgIcon,
  Switch,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import {
  cuisineType,
  distanceMarks,
  dollarMarks,
  mealType,
  rating,
} from './restaurant-filter-file';

const content = (
  <div>
    <Stack
      alignItems="center"
      justifyContent="space-between"
      direction="row"
      sx={{ p: 3 }}
    >
      <Typography variant="h5">Filters</Typography>
    </Stack>
    <Stack
      spacing={5}
      sx={{ p: 3 }}
    >
      <form>
        <OutlinedInput
          defaultValue=""
          fullWidth
          placeholder="Search by name"
          startAdornment={
            <InputAdornment position="start">
              <SvgIcon>
                <SearchIcon />
              </SvgIcon>
            </InputAdornment>
          }
        />
      </form>
      <div>
        <Stack spacing={4}>
          <Box>
            <Typography sx={{ mb: 5 }}>Distance:</Typography>
            <Box sx={{ mr: 2, ml: 2 }}>
              <Slider
                aria-label="distance-range"
                defaultValue={0}
                // getAriaValueText={valuetext}
                step={1}
                marks={distanceMarks}
                valueLabelDisplay="on"
                min={0}
                max={20}
              />
            </Box>
          </Box>
          <Box>
            <Typography sx={{ mb: 5 }}>$ Per Person:</Typography>
            <Box sx={{ mr: 2, ml: 2 }}>
              <Slider
                aria-label="distance-range"
                defaultValue={0}
                // getAriaValueText={}
                marks={dollarMarks}
                valueLabelDisplay="on"
                min={0}
                max={120}
              />
            </Box>
          </Box>
          <Box>
            <Typography>Rating:</Typography>
            <RadioGroup
              sx={{
                py: 1,
                px: 1.5,
              }}
            >
              {rating.map((item, index) => (
                <FormControlLabel
                  control={
                    <Radio
                    // checked={isChecked}
                    // onChange={handleToggle}
                    />
                  }
                  key={index}
                  label={
                    <Box sx={{ display: 'flex' }}>
                      <Rating
                        name="read-only"
                        value={item}
                        readOnly
                      />
                      {item !== 5 && <Typography>&Up</Typography>}
                    </Box>
                  }
                  value={item}
                />
              ))}
            </RadioGroup>
          </Box>
        </Stack>
      </div>
      <div>
        <FormLabel
          sx={{
            display: 'block',
            mb: 2,
          }}
        >
          Meals:
        </FormLabel>
        <Box
          sx={{
            borderColor: 'divider',
            borderRadius: 1,
            borderStyle: 'solid',
            borderWidth: 1,
          }}
        >
          <FormGroup
            sx={{
              py: 1,
              px: 1.5,
            }}
          >
            {mealType.map((item, index) => (
              <FormControlLabel
                control={
                  <Checkbox
                  // checked={isChecked}
                  // onChange={handleToggle}
                  />
                }
                key={index}
                label={item}
                value={item}
              />
            ))}
          </FormGroup>
        </Box>
      </div>

      <div>
        <FormLabel
          sx={{
            display: 'block',
            mb: 2,
          }}
        >
          Cuisine:
        </FormLabel>
        <Box
          sx={{
            borderColor: 'divider',
            borderRadius: 1,
            borderStyle: 'solid',
            borderWidth: 1,
          }}
        >
          <FormGroup
            sx={{
              py: 1,
              px: 1.5,
            }}
          >
            {cuisineType.map((item, index) => (
              <FormControlLabel
                control={
                  <Checkbox
                  // checked={isChecked}
                  // onChange={handleToggle}
                  />
                }
                key={index}
                label={item}
                value={item}
              />
            ))}
          </FormGroup>
        </Box>
      </div>
      <FormControlLabel
        control={<Switch />}
        label="Open Now"
      />
    </Stack>
  </div>
);
const RestaurantFilter = () => {
  return content;
};

export default RestaurantFilter;
