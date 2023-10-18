import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Countries({
  countries,
  searchTerm,
  searchRegion,
  setFilteredCountries,
}) {
  console.log(countries);
  const [filteredCountries, setFilteredCountriess] = useState(countries);

  useEffect(() => {
    const filteredCountries = countries.filter((country) => {
      const nameMatches = country.name.common
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const regionMatches =
        searchRegion === "All" || country.region === searchRegion;
      return nameMatches && regionMatches;
    });

    setFilteredCountriess(filteredCountries);
    setFilteredCountries(filteredCountries);
  }, [searchRegion, searchTerm, countries]);
  return (
    <ul className="countries">
      {filteredCountries.map((country, index) => {
        return (
          <li key={index} className="country">
            <Link to={country.name.common}>
              <div className="country-image">
                <img src={country.flags.svg} alt={country.flags.alt} />
              </div>
              <div className="country-info">
                <h3 className="country-name">{country.name.common}</h3>
                <p className="country-population">
                  <strong>Population:</strong> {country.population}
                </p>
                <p className="country-region">
                  <strong>Region:</strong> {country.region}
                </p>
                <p className="country-capital">
                  <strong>Capital:</strong> {country.capital}
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
export default Countries;
