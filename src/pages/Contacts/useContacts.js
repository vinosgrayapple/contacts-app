import { useState, useEffect } from "react";

export const useContacts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getContacts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://randomuser.me/api/?results=20");
        const { results, error } = await response.json();
        if (error) throw Error("No data");
        console.log(results);
        setData(results);
        setIsError(false);
      } catch (e) {
        console.error(e);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getContacts();
  }, []);
  return {
    isLoading,
    isError,
    data,
  };
};
