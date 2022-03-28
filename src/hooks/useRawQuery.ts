import { useQuery } from "react-query";
import { fetchRaw } from "../api";
import { getFluxQueryOptions, TimeSeriesData } from "../types";
import {mockQueryData} from '../mock'

export const useRawQuery = (options: getFluxQueryOptions) => {
  const obj = useQuery(`${options.measurement}_${options.moid}`, () => fetchRaw(options).catch());
  obj.data as TimeSeriesData;
  // if (process.env.REACT_APP_ENV === "test") 
  obj.data = mockQueryData;
  return obj;
};
