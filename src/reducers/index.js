const mockData = [
  {id: 1, date: Date.now(), headline: "headline1", location: "San Francisco", newsLink: "abc7news.com", donationLink: "gofundme.com", violenceType: "assault"},
  {id: 2, date: Date.now(), headline: "headline2", location: "New York", newsLink: "cbsnews.com", donationLink: "gofundme.com", violenceType: "death"},
  {id: 3, date: Date.now(), headline: "headline3", location: "Seattle", newsLink: "nextshark.com", violenceType: "assault"}
]

const initialState = {
  articles: mockData
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
