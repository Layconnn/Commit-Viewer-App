import React, { useEffect, useState } from 'react'
import Api from '../../api/api';
import { useNavigate } from 'react-router-dom';

function SeeCommits(props) {

  return (
    <>
        <div type='search' className='search-btn' onClick={props.onClick}>{props.text}</div>
    </>
  )
}

export default SeeCommits
