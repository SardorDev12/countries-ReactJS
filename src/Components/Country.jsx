import { useLoaderData } from "react-router-dom";

function Country() {
  const country = useLoaderData();
  return <div className="country-page">{country[0].name.common}</div>;
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
