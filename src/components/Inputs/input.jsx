import React from 'react'

function Input(props) {
  

  return (
    <>
      
      <span>
        <i className="fa fa-search icon"></i>
        <input onChange={props.onChange} type="text" className={props.className} placeholder={props.placeholder}  />
      </span>
      
    </>
  )
}

export default Input
