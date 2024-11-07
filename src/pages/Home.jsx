import SearchInput from './../components/SearchInput';
import RegionMenu from './../components/RegionMenu';
import CountryList from './../components/CounteyList';
import useFetchData from '../Hook/useFetchData';
import { MoonLoader } from "react-spinners";

const Home = () => {
  const {countries,filteredCountries,setFilteredCountries,isLoading,isError } = useFetchData();
  return (
    <div>
      {isError && <p>Something went wring!</p>}
      {isLoading && <MoonLoader color="red" size={45} />}
      {!isError && !isLoading && (
        <>
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              countriesList={countries}
              filterCountriesList={setFilteredCountries}
            />
            <RegionMenu
              countriesList={countries}
              filterCountriesList={setFilteredCountries}
            />
          </div>
          <CountryList data={filteredCountries} />
        </>
      )}
    </div>
  );
};

export default Home;
