'use strict';
async function fetchData(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

const url = 'https://reqres.in/api/users/1';
console.log(fetchData(url));
