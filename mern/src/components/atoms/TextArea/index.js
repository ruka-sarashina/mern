import React from 'react'
import './TextArea.scss';

const TextArea = ({...rest}) => {
  return (
    <div>
        <textarea className='text-area' {...rest}></textarea>
    </div>
  )
}

export default TextArea
