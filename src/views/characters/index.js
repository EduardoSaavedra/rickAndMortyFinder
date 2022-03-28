import React from "react";
import Link from "@mui/material/Link";

const Character = ({ characters }) => {
  return (
    <div className="character__container">
      {characters.map(({ image, name, id }) => {
        return (
          <section key={id}>
            <p className="character__text"> {name} </p>
            <img className="character__image" src={image} alt={name} />
            <div className="character__text">
              <Link href={`/personaje/${id}`}>Ver detalle</Link>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Character;
