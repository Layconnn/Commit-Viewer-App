import React, { useEffect, useState } from 'react'
import Api from '../../api/api';
import { useNavigate } from 'react-router-dom';

function SeeCommits(props) {
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
        <div type='search' className='search-btn' onClick={() => getCommits()}>{props.text}</div>
    </>
  )
}

export default SeeCommits
