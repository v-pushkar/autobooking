import { createStore } from "redux";
import reducer from "./reducers/idex";

const store = createStore(reducer);

export default store;
