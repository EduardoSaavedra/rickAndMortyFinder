import React from 'react'

const Character = ({ characters }) => {
  return (
    <div className='character-container'>
    {characters.map(({image, name}) => {
      return (
        <>
        <p>{name}</p>
        <img src={image} alt={name}/>
        </>
      )
    })}
    </div>
  )
}

export default Character
