import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

function Country() {
  const country = useLoaderData()[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="country-page">
      <Link to={"/"} className="back">
        Back
      </Link>
      <div className="country-full-info">
        <div className="info__country-image">
          <img src={country.flags?.svg} alt={country.flags?.alt} />
        </div>
        <div className="info-details">
          <h2 className="info__country-name">{country.name.common}</h2>
          <ul>
            <li>Native Name: {country.name?.official}</li>
            <li>Population: {country.population.toLocaleString("en-US")}</li>
            <li>Region: {country.region}</li>
            <li>Sub Region: {country.subregion}</li>
            <li>Capital: {country.capital}</li>
            <li>Top Level Domain: {country.tld[0]}</li>
            <li>Currencies: {Object.keys(country.currencies)}</li>
            <li>Languages: {Object.values(country.languages).join(" ")}</li>
          </ul>
          <div className="borders">
            <p>Border Countries:</p>
            <ul>
              {country.borders
                ? country.borders.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })
                : "This country is Island"}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Country;
export const loadCountryData = async ({ params }) => {
  const { name } = params;

  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  if (!res.ok) {
    throw new Error("Failed to load data! Check your internet connection!");
  }

  return res.json();
};
