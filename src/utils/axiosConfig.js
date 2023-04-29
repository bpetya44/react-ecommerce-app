//export const base_url = "http://localhost:4000/api/";
export const base_url = "https://shop-corner-api.onrender.com/api/";

const getTokenFromLocalStorage = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;
console.log(getTokenFromLocalStorage);

//axios config
export const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage : ""
    }`,
    Accept: "application/json",
  },
};
