import React from 'react'
import './Button.scss'

const Button = ({title, ...rest}) => {
  return (
    <div>
        <button  className='button' {...rest}>{title}</button>
    </div>
  )
}

export default Button
