import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Api from '../../api/api';

function CommitsButton(props) {
  const {repo} = props;
  const [valid, setValid] = useState([])
 
  const locate = useNavigate();

  const getCommits = async() => {
    try{
      const response = await Api.get('https://api.github.com/repos/' + repo + '/commits')
      setValid(response.data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    if(valid.length > 0){
      locate('/view-commits', {
        state: {
          valid
        }
      })
    }
  }, [valid])

  return (
    <>
      <span className='btn'>
        <button type='search' className="main-button" onClick={() => getCommits()}>{props.text}</button>
      </span>
    </>
  )
}

export default CommitsButton 