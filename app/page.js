'use client';
import { useState } from "react";
import classes from "./page.module.css";
import Map from "@/components/map";

export default function Home() {
  const [location, setLocation] = useState({latitude : null, longitude : null});
  const [error, setError] = useState(null);

  const handleGetLocation = () => {
    if("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude : position.coords.latitude,
            longitude : position.coords.longitude
          });
          setError(null);
        }, 
        (err) => {
          setError("Failed to retrieve location. Make sure location services are enabled");
        }
      );
    }else{
      setError("Geolocation is not supported by your browser");
    }
  }
  return <>
    <div className={classes.container}>
      <h1>Find Your Current Location</h1>
      <button onClick={handleGetLocation}>Get Location</button>
      {location.latitude && location.longitude ? (
        <div>
        <div className={classes.location}>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div> 
        <Map latitude = {location.latitude} longitude = {location.longitude} />
        </div>
      ) : null}
      {error ? <p className={classes.error}>{error}</p> : null}
    </div>
  </>
}
