import Select from "react-select";

const options = [
  { value: "all regions", label: "All regions" },
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];
const customStyles = {
  control: (provided) => ({
    ...provided,
    display: "flex",
    height: "3rem",
    justifyContent: "space-between",
    gap: "3rem",
    borderRadius: "0.375rem",
    border: "none",
    paddingLeft: "1rem",
    paddingRight: "0.5rem",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#1f2937", // لون الخلفية
    color: "#f3f4f6", // لون النص
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#f3f4f6", // لون النص
  }),
  option: (provided) => ({
    ...provided,
    "&:hover": {
      color: "#1f2937", // لون النص عند التمرير
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#1f2937", // لون الخلفية للقائمة
    color: "#f3f4f6", // لون النص
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  input: (provided) => ({
    ...provided,
    color: "#f3f4f6", // لون النص
  }),
};
const RegionMenu = ({countriesList, filterCountriesList}) => {
  const handleRegionChange = (e) => {
    const region = e.label;
    console.log(region)
  const filteredCountries = region === "All regions"? countriesList: countriesList.filter((country)=> country.region === region)
  filterCountriesList(filteredCountries);
  };

  return (
    <Select
      defaultValue={options[0]}
       onChange={handleRegionChange}
      options={options}
      styles={customStyles}
    />
  );
};

export default RegionMenu;
