import React from "react";

const Character = ({ characters }) => {
  return (
    <div className="character-container">
      {characters.map(({ image, name }) => {
        return (
          <section>
            <p className='character-name'> {name} </p>
            <img className="character-image" src={image} alt={name} />
          </section>
        )
      })}
    </div>
  );
};

export default Character;
