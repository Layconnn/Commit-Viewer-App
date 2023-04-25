import React from 'react'
import SeeCommits from '../Buttons/seeCommits'
import Inputs from '../Inputs/inputs'

function LoadingHeader() {
  return (
    <>
    <div className='body-head'>
        <div className='loading-head'>
            <h2>CommitViewer</h2>
            <Inputs placeholder="microsoft/vscode" />
            <SeeCommits text="See Commits🧨"/>
        </div>
    </div>
    </>
  )
}

export default LoadingHeader
