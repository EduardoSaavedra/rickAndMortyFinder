import React from "react";

const Character = ({ characters }) => {
  return (
    <div className="character-container">
      {characters.map(({ image, name, id }) => {
        return (
          <section key={id}>
            <p className='character-name'> {name} </p>
            <img className="character-image" src={image} alt={name} />
          </section>
        )
      })}
    </div>
  );
};

export default Character;
