import { bindActionCreators, createStore } from "redux";

export type Book = {
  title: string;
  image: string;
  author: string;
  publisher: string;
  description: string;
  isbn: string;
};

const SAVE_RESULTS = "SAVE_RESULTS";
const SEARCH_VALUE = "SEARCH_VALUE";

type Action = {
  type: string;
  results: [];
  text: string;
};

const initialState = {
  results: [],
  text: "",
};

export const saveResults = (res: Book[]) => {
  return { type: SAVE_RESULTS, res };
};

export const searchValue = (text: string) => {
  return { type: SEARCH_VALUE, text };
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SAVE_RESULTS:
      return { ...state, results: [...action.results] };
    case SEARCH_VALUE:
      return { ...state, text: action.text };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
