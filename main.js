const url = "https://restcountries.com/v3.1/name/{name}?fullText=true";
const searchEl = document.querySelector(".search");
const inputEl = document.querySelector(".input");
const countryEl = document.getElementsByTagName("h4");

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
        currencies: data[0].currencies,
        // currenciessymbol: data[0].currencies.symbol,
      };

      console.log(myObject.name);
      console.log(myObject.currencies);
      //   console.log(myObject.currenciessymbol);
    });
});
