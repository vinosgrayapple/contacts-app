import { DATA_VIEW_MODES } from "./constants";
import { useState, useEffect } from "react";

export const useViewMode = () => {
  const getInitialDataViewMode = () =>
    localStorage.getItem("dataViewMode") || DATA_VIEW_MODES.TABLE;
  const [dataViewMode, setDataViewMode] = useState(getInitialDataViewMode);
  useEffect(() => {
    localStorage.setItem("dataViewMode", dataViewMode);
  }, [dataViewMode]);
  return [dataViewMode, setDataViewMode];
};
