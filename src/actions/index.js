import Geocode from "react-geocode";
import { GOOGLE_API_KEY } from "../keys";

export const addArticle = (payload) => (
  async(dispatch) => {
    Geocode.setApiKey(GOOGLE_API_KEY);
    const response = await Geocode.fromAddress(payload.location);
    const { lat, lng } = response.results[0].geometry.location;
    //TODO: add article to DB
    payload = {...payload, lat, lng };
    console.log("new payload", payload)
    return { type: "ADD_ARTICLE", payload };
  }
  //TODO: handle error case
)

// export function addArticle(payload) {
//
//
//   Geocode.fromAddress(payload.location).then(
//   // Geocode.fromAddress("San Francisco").then(
//     (response) => {
//       const { lat, lng } = response.results[0].geometry.location;
//       //TODO: add article to DB
//       payload = {...payload, lat, lng };
//       console.log("new payload", payload)
//       return { type: "ADD_ARTICLE", payload };
//     },
//     (error) => {
//       console.error(error);
//       return { type: "ERROR", error };
//     }
//   );
//
//   // return { type: "ADD_ARTICLE", payload };
// }

export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/articles") //TODO: replace URL with backend
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      })
  }
}
