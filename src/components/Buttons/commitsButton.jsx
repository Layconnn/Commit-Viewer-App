import React from 'react'

function CommitsButton(props) {
  return (
    <>
        <button className='bottom-button' onClick={props.onClick}>{props.text}</button>
    </>
  )
}

export default CommitsButton