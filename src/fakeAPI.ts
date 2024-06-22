import { fetchedData } from './types/search-result';

const fetchedData = [
  { label: 'the location6', type: 'place' },
  { label: 'the restaurant7', type: 'restaurant' },
  { label: 'the location8', type: 'place' },
  { label: 'the restaurant9', type: 'restaurant' },
  { label: 'the location10', type: 'place' },
];

const DELAY = 800;
export const fakeAPI = {
  fetchPlaces: (inputValues: string): Promise<fetchedData> => {
    console.log(inputValues);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(fetchedData);
      }, DELAY);
    });
  },
};
