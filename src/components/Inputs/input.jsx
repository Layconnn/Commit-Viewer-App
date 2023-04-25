import React from 'react'

function Input(props) {
  

  return (
    <>
        <input onChange={props.onChange} type="search" className={props.className} placeholder={props.placeholder}  />
    </>
  )
}

export default Input
