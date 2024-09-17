import classes from './map.module.css';

export default function Map({latitude, longitude}){
    return <>
        <div className={classes.mapContainer}>
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              src={`https://www.google.com/maps/embed/v1/place?q=${latitude},${longitude}&key=AIzaSyDiDR5AcMSyWYM0tUJaLk-qXhypfZ7B9bg`}
              allowFullScreen
            ></iframe>
          </div>
    </>
}