import { useNavigate } from "react-router-dom";
function Filter({
  handleSearch,
  countries,
  handleSearchRegion,
  selectedValue,
  filteredCountries,
}) {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    handleSearchRegion(event.target.value);
  };
  const handleKeyPress = (e) => {
    handleSearch(e.target.value);
  };

  const handleFilteredCountry = (e) => {
    e.preventDefault();
    if (countries.length > 0) {
      const firstCountryName = filteredCountries[0].name.common;
      navigate(`/${firstCountryName}`);
    }
  };

  const regions = new Set(countries.map((country) => country.region));
  return (
    <div className="filter">
      <form className="search-filter" onSubmit={handleFilteredCountry}>
        <input
          type="text"
          onKeyDown={handleKeyPress}
          placeholder="Search for a country name"
        />
        <button type="submit">search</button>
      </form>
      <div className="selectFilter">
        <select value={selectedValue} onChange={handleSelectChange}>
          <option value="All">All</option>
          {[...regions].map((region, index) => {
            return (
              <option value={region} key={index}>
                {region}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
export default Filter;
