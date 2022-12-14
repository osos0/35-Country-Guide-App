const searchEl = document.querySelector(".search");
const inputEl = document.querySelector(".input");
const countryEl = document.querySelector(".coun");
const capitalEl = document.querySelector(".capital");
const continentEl = document.querySelector(".continent");
const populatioEl = document.querySelector(".population");
const currencyEl = document.querySelector(".currency");
const commonLanguageEl = document.querySelector(".common-Language");
const imageEl = document.querySelector(".ima");
const con1El = document.querySelector(".con1");
const con2El = document.querySelector(".con2");

searchEl.addEventListener("click", () => {
  if (inputEl.value !== ``) {
    con1El.classList.add("active");
    con2El.classList.remove("active");
  } else {
    con1El.classList.remove("active");
    con2El.classList.add("active");
  }
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
        currencies:
          data[0]["currencies"][`${Object.keys(data[0]["currencies"])[0]}`][
            "name"
          ],
        currenciesSymbol:
          data[0]["currencies"][`${Object.keys(data[0]["currencies"])[0]}`][
            "symbol"
          ],
        languge: data[0]["languages"][`${Object.keys(data[0]["languages"])}`],
        flagImg: data[0]["flags"]["png"],
      };
      countryEl.innerHTML = myObject.name;
      capitalEl.innerHTML = `Capital : ${myObject.capital}`;
      continentEl.innerHTML = `Continent : ${myObject.continent}`;
      populatioEl.innerHTML = `Population : ${myObject.population}`;
      currencyEl.innerHTML = `Currency : ${myObject.currencies} - ${myObject.currenciesSymbol}`;
      commonLanguageEl.innerHTML = `Common-Language : ${myObject.languge}`;
      imageEl.style.backgroundImage = `url(${myObject.flagImg})`;
    });
  inputEl.value = ``;
});
