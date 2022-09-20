import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { useState } from "react";

export const useData = () => {
  const key = process.env.REACT_APP_API_KEY;
  const [city, setCity] = useState("Bhopal");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  const { data, isLoading, refetch, isError } = useQuery(
    ["weatherinfo"],
    () => {
      return Axios.get(url)
        .then((res) => res.data)
        .catch((err) => {
          console.log(err.message);
        });
    }
  );

  return { data, isLoading, refetch, isError, setCity };
};
