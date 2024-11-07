import CountryCard from "./CountryCard";
import EmptySearch from './EmptySearch';

//justify-between gap-x-[70px] gap-y-12 pb-8 md:mt-12 md:grid-cols-[repeat(2,minmax(0,_auto))] md:pb-12 lg:grid-cols-[repeat(4,minmax(0,_auto))] lg:gap-y-[70px]
const   CountryList  = ({ data }) => {
    // Check if data is valid and has length
    const hasData = data && data.length > 0;
  return (
    <div className="container mx-auto flex justify-center flex-col">
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-x-5 gap-y-7" >
        {hasData ?data.map((country, index) => (
          <CountryCard
            key={index}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flag={country.flags.svg}
          />
        )): (<EmptySearch />)}
      </div>
    </div>
  );
};

export default CountryList ;
