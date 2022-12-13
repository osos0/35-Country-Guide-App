const url = "https://restcountries.com/v3.1/name/{name}?fullText=true";
const searchEl = document.querySelector(".search");
const inputEl = document.querySelector(".input");
const countryEl = document.querySelector(".coun");
const capitalEl = document.querySelector(".capital");
const continentEl = document.querySelector(".continent");

// console.log(searchEl);

searchEl.addEventListener("click", () => {
  fetch(`https://restcountries.com/v3.1/name/${inputEl.value}?fullText=true`)
    .then((response) => {
      let data = response.json();
      return data;
    })
    .then((data) => {
      const myObject = {
        name: data[0].name["common"],
        capital: data[0].capital[0],
        population: data[0].population,
        continent: data[0].continents,
        // currencies: data[0].currencies.EGP.name,
        // currenciesSymbol: data[0].currencies.EGP.symbol,
        // languge: data[0].languages,
        // currenciessymbol: data[0].currencies.symbol,
      };
      countryEl.innerHTML = `${myObject.name}`;
      capitalEl.innerHTML = `capital: ${myObject.capital}`;
      continentEl.innerHTML = `capital: ${myObject.continent}`;
      // console.log(myObject.capital);
      // console.log(myObject.name);
      console.log(myObject.population);
      console.log(myObject.currencies);
      console.log(myObject.currenciesSymbol);
      console.log(myObject.languge);
    });
});
