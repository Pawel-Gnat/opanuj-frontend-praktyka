import { Country } from '../types/types';

export default function useSortCountries(countries: Country[]) {
  return [...countries].sort((a, b) => {
    return a.name.common.localeCompare(b.name.common);
  });
}
