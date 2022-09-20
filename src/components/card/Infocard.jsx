import React from "react";
import Info from "./Info";
import City from "./City";
import { useData } from "../../hooks/useData";

const Infocard = () => {
  const { data } = useData();
  const sunrise = new Date(data?.sys.sunrise).toLocaleTimeString();
  const sunset = new Date(data?.sys.sunset).toLocaleTimeString();
  return (
    <div className="infocard">
      <City />
      <div className="container">
        <Info name="Temperature" data={data?.main.temp || "N/A"} />
        <Info name="Feels like" data={data?.main.feels_like || "N/A"} />
        <Info name="Visibility" data={data?.visibility || "N/A"} />
        <Info name="Pressure" data={data?.main.pressure || "N/A"} />
        <Info name="Humidity" data={data?.main.humidity || "N/A"} />
        <Info name="Sunrise" data={sunrise || "N/A"} />
        <Info name="Sunset" data={sunset || "N/A"} />
        <small style={{ color: "rgba(255, 255, 255, 0.4)" }}>WIND -</small>
        <Info name="Speed" data={data?.wind.speed || "N/A"} />
        <Info name="Gust" data={data?.wind.gust || "N/A"} />
      </div>
    </div>
  );
};

export default Infocard;
