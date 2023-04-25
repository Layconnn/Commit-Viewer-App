import React from 'react'
import Inputs from '../components/Inputs/inputs'
import SeeCommits from '../components/Buttons/seeCommits'
import { useState } from 'react'

function LoadingPage() {

  const [ commit, setCommit ] = useState('')

  const handleChange = (e) => {
    setCommit(e.target.value)
  }

  return (
    <>
     <div className='loading-head'>
            <h2>CommitViewer</h2>
            <div className='inline-form'>
              <Inputs onChange={handleChange} className="top-input" placeholder="microsoft/vscode" />
              <SeeCommits text="See Commits🧨"/>
            </div>
      </div>
      <div>
        <div>
            <h1 className='microsoft'>microsoft/vscode</h1>
            <p className='action'>Loading...</p>
        </div>
      </div>
    </>
  )
}

export default LoadingPage
