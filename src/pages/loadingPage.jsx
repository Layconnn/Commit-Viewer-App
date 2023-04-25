import React from 'react'
import LoadingHeader from '../components/Header/loadingHeader'

function LoadingPage() {
  return (
    <>
        <LoadingHeader />
        <div>
            <h1 className='microsoft'>microsoft/vscode</h1>
            <p className='action'>Loading...</p>
        </div>
    </>
  )
}

export default LoadingPage
