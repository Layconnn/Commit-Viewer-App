import React from 'react'
import LoadingHeader from '../components/Header/loadingHeader'

function ViewCommitsPage() {
  return (
    <>
        <LoadingHeader />
        <div>
            <h1>microsoft/vscode</h1>
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
