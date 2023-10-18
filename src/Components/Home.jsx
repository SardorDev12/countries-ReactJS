import { useLoaderData } from "react-router-dom";
import Countries from "./Countries";
import Filter from "./Filter";
import { useState } from "react";

function Home() {
  const countries = useLoaderData();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchRegion, setSearchRegion] = useState("All");
  const [filteredCountries, setFilteredCountries] = useState("");
  const handleSearchCountry = (val) => {
    setSearchTerm(val);
  };

  const handleSearchRegion = (val) => {
    setSearchRegion(val);
  };

  const sortedData = countries.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );
  return (
    <div>
      <Filter
        countries={countries}
        selectedValue={searchRegion}
        handleSearchRegion={handleSearchRegion}
        handleSearch={handleSearchCountry}
        filteredCountries={filteredCountries}
      />
      <Countries
        searchRegion={searchRegion}
        searchTerm={searchTerm}
        countries={sortedData}
        setFilteredCountries={setFilteredCountries}
      />
    </div>
  );
}
export default Home;

export const loadCountriesData = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (!res.ok) {
    throw new Error("Failed to load data! Check your internet connection!");
  }
  return res.json();
};
