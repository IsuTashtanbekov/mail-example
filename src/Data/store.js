import {combineReducers, createStore} from "redux";
import {servicesReducer} from "./services-reducer";
import {marksReducer} from "./marks-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import {partnersReducer} from "./partners-reducer";

const reducers = combineReducers({
    Services: servicesReducer,
    Marks: marksReducer,
    Partners: partnersReducer,
})

const store = createStore(reducers, composeWithDevTools())

window.store = store
export default store;