import React from "react";

const Character = ({ characters }) => {
  return (
    <div className="character__container">
      {characters.map(({ image, name, id }) => {
        return (
          <section key={id}>
            <p className='character__name'> {name} </p>
            <img className="character__image" src={image} alt={name} />
          </section>
        )
      })}
    </div>
  );
};

export default Character;
