import React from 'react'
import HomeHeader from '../components/Header/homeHeader'
import CommitsButton from '../components/Buttons/commitsButton'
import SearchCommitInputs from '../components/searchCommitInputs'
import { useNavigate } from 'react-router-dom'

function Home() {

  const router = useNavigate()

  return (
    <>
      <div className='body'>
        <HomeHeader />
        <div className='text'>
          <h1 className='first-text'>Discover the world of code</h1>
          <p className='second-text'>Explore open source projects from GitHub, and read their commit history to see the story of how they were built.</p>
        </div>
        <SearchCommitInputs />
        <p className='option'>Or pick one of these suggested repos</p>
        <div className='buttons'>
          <CommitsButton className="initial-button" text="django/django" />
          <CommitsButton onClick={() => router('/view-commits')} className="second-button" text="microsoft/vscode" />
          <CommitsButton onClick={() => router('/loading')} className="third-button" text="jezen/is-thirteen" />
          <CommitsButton className="fourth-button" text="benawad/dogehouse" />
        </div>
      </div>
    </>
  )
}

export default Home