import React, { useEffect, useState } from 'react'
import api from '../../api/api';
import { useLocation, useNavigate } from 'react-router-dom';

function SeeCommits(props) {
  const {repo} = props;
  const [commits, setCommits] = useState([]);

  const router = useNavigate();

  const handleSearchCommits = () => {
      api.get('https://api.github.com/repos/' + repo + '/commits')
      .then(response => {
        setCommits(response.data)
      })
  }

  useEffect(() => {
      if(commits.length > 0) {
        router('/view-commits', {
          state: {
            commits
          }
        })
      }
  }, [commits])

  return (
    <>
        <div type='search' className='search-btn' onClick={() => handleSearchCommits()}>{props.text}</div>
    </>
  )
}

export default SeeCommits
