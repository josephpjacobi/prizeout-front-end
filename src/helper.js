const baseURL = "http://localhost:8850/";

export async function fetchData(endpoint) {
  const url = `${baseURL}${endpoint}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function postData(endpoint, body = {}) {
  const url = `${baseURL}${endpoint}`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

//https://stackoverflow.com/questions/32768494/convert-a-whole-number-amount-of-cents-to-a-readable-dollar-amount-in-javascript
export function convertCentsToDollars(cents) {
  const dollars = cents / 100;
  return dollars.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
