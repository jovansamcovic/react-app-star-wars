import { useState, useEffect } from "react";

const getData = (key, initialValue = []) => {
  const response = JSON.parse(localStorage.getItem(key));
  if (response) return response;
  else return initialValue;
}

const  useLocalstorage = (key) => {

  const [list, setList] = useState(() => {return getData(key)});

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(list));
  }, [list, setList, key]);

  return [list, setList];
}

export default useLocalstorage;