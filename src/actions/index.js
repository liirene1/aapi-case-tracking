export function addArticle(payload) {
  return { type: "ADD_ARTICLE", payload };
}

export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/articles") //TODO: replace URL with backend
      ,then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      })
  }
}
