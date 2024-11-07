import { useEffect, useState } from "react";

const useFetchData = (countery) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
      fetchDataApi();
  }, []);
  
  const fetchDataApi = () => {
    let url = "https://restcountries.com/v3.1/all"
    setIsLoading(true);
    if (countery) {
        url = `https://restcountries.com/v3.1/name/${countery}`
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (countery) {
          //Country page
          setCountries(data[0]);
        } else {
          //Homepage
          setCountries(data);
          setFilteredCountries(data);
        }
      })
      .finally(() => setIsLoading(false))
      .catch(() => setIsError(true));
  };


  return {countries,filteredCountries,setFilteredCountries,isLoading,isError };
}

export default useFetchData
