import React from 'react'
import Input from '../components/Inputs/input'
import SeeCommits from '../components/Buttons/seeCommits'
import { useState } from 'react'

function ViewCommitsPage() {

  const [ commit, setCommit ] = useState('')

  const handleChange = (e) => {
    setCommit(e.target.value)
  }


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
            <div className='update-container'>
                <div className='profiles'>
                    <div className='profile-container'></div>
                    <h6 className='person-name'>gearson</h6>
                </div>
                  <h6>Log all errors to console.error by default (#21130)</h6>
                  <p className='date'>23:30 28/04/2021</p>
            </div>
            <div className='update-container'>
                <div>
                    <div className='profile-container'></div>
                    <h6 className='person-name'>gearson</h6>
                </div>
                  <h6>Log all errors to console.error by default (#21130)</h6>
                  <p className='date'>23:30 28/04/2021</p>
            </div>
            <div className='update-container'>
                <div>
                    <div className='profile-container'></div>
                    <h6 className='person-name'>gearson</h6>
                </div>
                  <h6>Log all errors to console.error by default (#21130)</h6>
                  <p className='date'>23:30 28/04/2021</p>
            </div>
            <div className='update-container'>
                <div>
                    <div className='profile-container'></div>
                    <h6 className='person-name'>gearson</h6>
                </div>
                  <h6>Log all errors to console.error by default (#21130)</h6>
                  <p className='date'>23:30 28/04/2021</p>
            </div>
        </div>
    </>
  )
}

export default ViewCommitsPage
