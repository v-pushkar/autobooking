import {
  addDataToStorage,
  getDataObjFromStorage,
  createParse_link_data,
} from "./../utils/storage";

const initialSatate = {
  parse_link_data: null,
  search_data: {
    service: null,
    brand: null,
    style: null,
  },
  listsData: {
    terms: { menuName: "service", name: "service", data: [] },
    brands_terms: { menuName: "brands", name: "brand", data: [] },
    styles: { menuName: "styles", name: "style", data: [] },
  },
};

const serchDataAdd = (state, data) => {
  const newState = { ...state };
  Object.keys(state).forEach((i) => {
    if (data.type === i) {
      newState[i] = data.value;
    }
  });
  addDataToStorage("parse_link", newState);
  return { ...newState };
};
const parseLinkDataAdd = (state, data) => {
  const newParse_link = createParse_link_data(serchDataAdd(state, data));
  window.history.pushState("", "parse_link", newParse_link);
  return newParse_link;
};

const listAdd = (name, data, list) => {
  const newList = { ...list };
  newList[name].data = data;
  return newList;
};

const reducer = (state = initialSatate, action) => {
  switch (action.type) {
    case "ADD_SEARCH_DATA":
      return {
        ...state,
        search_data: serchDataAdd(state.search_data, action.payload),
        parse_link_data: parseLinkDataAdd(state.search_data, action.payload),
      };
    case "ADD_SEARCH_DATA_ON_REALOAD":
      return {
        ...state,
        search_data: getDataObjFromStorage("parse_link"),
        parse_link_data: createParse_link_data(
          getDataObjFromStorage("parse_link")
        ),
      };
    case "GET_LIST_TERMS":
      return {
        ...state,
        listsData: listAdd(
          action.payloadname,
          action.payloaddata,
          state.listsData
        ),
      };
    default:
      return state;
  }
};

export default reducer;
