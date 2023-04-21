import React from 'react'
import './Model.scss'

export const Model = (props) => {
  return (
    <div className='model'>
      <div>
        <img className='model-img' src={props.img} />
      </div>
      <p>{props.title}</p>
    </div>
  )
}
