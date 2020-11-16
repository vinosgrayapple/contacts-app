import { useState, useEffect } from "react";

export function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    return () => {
      setIsLoading(true);
      fetch("https://randomuser.me/api/?results=100")
        .then((response) => response.json())
        .then(({ results }) => {
          setContacts(results);
          setIsLoading(false);
          setIsError(false);
        })
        .catch(() => {
          setIsLoading(false);
          isError(true);
        });
    };
  }, []);
  if (isLoading) {
    return <div> ....Loading </div>;
  }
  if (isError) {
    return <div> ...Error </div>;
  }
  return <div className="contacts"> {contacts[0].name.first} </div>;
}
