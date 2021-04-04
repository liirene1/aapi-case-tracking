const initialState = {
  articles: []
}

function rootReducer(state = initialState, action) {
  if (action.type === "ADD_ARTICLE") {
    return {...state, articles: [...state.articles, action.payload]}
  }

  if(action.type === "DATA_LOADED") {
    return { ...state, articles: action.payload }
  }

  return state;
}

export default rootReducer;
