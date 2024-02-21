import { useState } from 'react';

import './App.css';

import useCountrySearch from './hooks/useCountrySearch';

import { SearchInput } from './components/search-input';
import { Select } from './components/select';
import { CountryItem } from './components/country-item';
import useSortCountries from './hooks/useSortCountries';

function App() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [filterOptions, setFilterOptions] = useState('');
  const { loading, countries } = useCountrySearch(searchValue, filterOptions);
  const sortedCountries = useSortCountries(countries);

  return (
    <>
      <h1>Wyszukaj państwo</h1>
      <div className="space">
        <SearchInput
          label="Szukaj: "
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Select setFilterOptions={setFilterOptions} />
      </div>
      <div>
        <h2>Wynik:</h2>
        {loading && <p>Wyszukiwanie...</p>}
        {sortedCountries.length > 0 && (
          <ul>
            {sortedCountries.map((el) => (
              <CountryItem key={el.name.common} name={el.name.common} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
