import { store } from "../store";

export default async ({ path, body = {}, method = "GET", header = {} }) => {
  try {
    const { getState } = store;
    const { user = {} } = getState();
    const { token = "" } = user;
    const auth = token ? { Authorization: `Bearer ${token}` } : {};
    console.log(process.env.REACT_APP_API_URL);

    let headers = { "content-type": "application/json", ...header, ...auth };
    const obj = method === "POST" ? { body: JSON.stringify(body) } : {};
    const response = await fetch(`${process.env.REACT_APP_API_URL}${path}`, {
      method,
      headers,
      ...obj,
    });
    return await response.json();
  } catch (error) {
    return new Promise((res, rej) => {
      rej(error);
    });
  }
};
