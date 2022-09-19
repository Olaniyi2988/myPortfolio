
import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='bg-gray-dark py-2 px-5 rounded-full'>{props.name}</button>
    </div>
  )
}

export default Button
