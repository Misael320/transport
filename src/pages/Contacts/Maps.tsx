import React from "react";

const Maps: React.FC = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3877.3927424926965!2d-72.8812432!3d-13.633857299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDM4JzAxLjkiUyA3MsKwNTInNTIuNSJX!5e0!3m2!1ses-419!2spe!4v1740498863309!5m2!1ses-419!2spe"
        width="600"
        height="400px"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
