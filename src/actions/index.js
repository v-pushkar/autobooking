/**
 * REDUCERS ACTIONS
 */

export const getListTerms = (i, data) => {
  // console.log("ACTION :", i, data);
  return {
    type: "GET_LIST_TERMS",
    payloaddata: data,
    payloadname: i,
  };
};
export const addSerchData = (data) => {
  // console.log("ACTION DATA:", data);
  return {
    type: "ADD_SEARCH_DATA",
    payload: data,
  };
};

export const addSearchDaraOnReload = () => {
  return {
    type: "ADD_SEARCH_DATA_ON_REALOAD",
  };
};
