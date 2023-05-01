import React, { useEffect } from 'react'
import Input from '../components/Inputs/input'
import SeeCommits from '../components/Buttons/seeCommits'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

function ViewCommitsPage() {

  const [ commit, setCommit ] = useState('')
  const [ commits, setCommits ] = useState([])
  
  const location = useLocation();

  const handleChange = (e) => {
    setCommit(e.target.value)
  }

  useEffect(() => {
    setCommits(location.state.commits)
  }, [])


  return (
    <>
        <div className='commit-head'>
            <h2>CommitViewer</h2>
            <div className='form'>
              <Input onChange={handleChange} className="head-input" placeholder="microsoft/vscode" />
              <SeeCommits text="See Commits🚀"/>
            </div>
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
