import { useEffect, useState } from 'react';

import { Country } from '../types/types';

export default function useCountrySearch(
  searchValue: string,
  filterOptions: string
) {
  const [countries, setCountries] = useState<Country[] | []>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchValue.length <= 2 || !filterOptions) {
      setCountries([]);
      return;
    }

    setLoading(true);
    fetch(`https://restcountries.com/v3.1/${filterOptions}/${searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      })
      .finally(() => setLoading(false));
  }, [searchValue, filterOptions]);

  return { countries, loading };
}
