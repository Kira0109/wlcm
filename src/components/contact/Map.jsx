import React from 'react';
import "./Contact.css";

const Map = () => {
  return (
    <div className='map-content'>
        {/* eslint-disable-next-line */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51159.25591807495!2d10.296671854150397!3d36.73568440901253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd49fac7baa97f%3A0x5d603fcf4fe15df0!2sEzzahra%20plage!5e0!3m2!1sfr!2stn!4v1702936243374!5m2!1sfr!2stn" width="100%" height="450" style={{border:0}}></iframe>
    </div>
  )
}

export default Map