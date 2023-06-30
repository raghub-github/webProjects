import { combineReducers } from "redux";
import amountReducers from "./amountReducers";

export const reducers = combineReducers({ amount: amountReducers });
