import { React, useState, useEffect } from 'react'
import SearchCommitInputs from '../components/searchCommitInputs'
import { useLocation } from 'react-router-dom'


function ViewCommitsPage() {
  const [ commits, setCommits ] = useState([])
  
  
  const location = useLocation();

  useEffect ( () =>{
    setCommits(location.state.commits)
  }, [])


  return (
    <>
        <div className='commit-head'>
            <h2>CommitViewer</h2>
            <SearchCommitInputs /> 
        </div>
        <div>
          <h3>microsoft/vscode</h3>
            {commits.map((commit, key) => {
              return <>
                <div className='update-container' key={key}>
                    <div className='profiles'>
                        <div className='profile-container'></div>
                        <h5 className='person-name'>{commit.commit.author.name}</h5>
                    </div>
                    <h6>{commit.commit.message}</h6>
                    <p className='date'>{commit.committer.date}</p>
                </div>
                </>
            })}
        </div>
    </>
  )
}

export default ViewCommitsPage
