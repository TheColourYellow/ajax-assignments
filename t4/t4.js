'use strict';
async function fetchData(url, options) {
  const response = await fetch(url, options);
  const json = await response.json();
  if (!response.ok) {
    throw new Error('Error in URL or options');
  }
  return json;
}

try {
  const user = {
    name: 'John Doe',
    job: 'Developer',
  };
  const url = 'https://reqres.in/api/users';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  const userData = fetchData(url, options);
  console.log(userData);
} catch (error) {
  console.error('An error occurred:', error);
}
