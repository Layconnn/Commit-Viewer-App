import React from 'react'
import HomeHeader from '../components/Header/homeHeader'
import CommitsButton from '../components/Buttons/commitsButton'
import SeeCommits from '../components/Buttons/seeCommits'
import Inputs from '../components/inputs/inputs'

function Home() {
  return (
    <>
      <div className='body'>
        <HomeHeader />
        <div className='text'>
          <h1 className='first-text'>Discover the world of code</h1>
          <p className='second-text'>Explore open source projects from GitHub, and read their commit history to see the story of how they were built.</p>
        </div>
        <div className='input-button'>
            <Inputs placeholder="Eg. facebook/react" type="text" />
            <SeeCommits text="See Commits🧨" />
        </div>
        <p>Or pick one of these suggested repos</p>
        <div className='buttons'>
          <CommitsButton className="initial-button" text="django/django" />
          <CommitsButton className="second-button" text="microsoft/vscode" />
          <CommitsButton className="third-button" text="jezen/is-thirteen" />
          <CommitsButton className="fourth-button" text="benawad/dogehouse" />
        </div>
      </div>
    </>
  )
}

export default Home