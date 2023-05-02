import React from 'react'
import SearchCommitInputs from '../components/searchCommitInputs'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

function LoadingPage() {

  return (
    <>
      <div className='loading-head'>
              <h2>CommitViewer</h2>
              <SearchCommitInputs />
        </div>
          <div>
            <h1 className='microsoft'>microsoft/vscode</h1>
            <p className='action'>Loading...</p>
          </div>
    </>
  )
}

export default LoadingPage
