import React from 'react'

function Inputs(props) {
  

  return (
    <>
        <input onChange={props.onChange} type="search" className={props.className} placeholder={props.placeholder}  />
    </>
  )
}

export default Inputs
