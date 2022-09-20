import React from "react";
import { useData } from "../../hooks/useData";

const City = () => {
  const { data, isLoading } = useData();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="city">
        <h1>{data?.name} -</h1>
        {data && (
          <img
            src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        )}
      </div>
      <p className="description">{data?.weather[0].description}</p>
    </>
  );
};

export default City;
