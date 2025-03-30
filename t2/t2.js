'use strict';

async function fetchData(url, options = {}) {
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
}

const url = 'https://reqres.in/api/users ';
const user = {
  name: 'Fictitious Name',
  job: 'Human',
};
const options = {
  method: 'POST',
  Headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
};
console.log(fetchData(url, options));
