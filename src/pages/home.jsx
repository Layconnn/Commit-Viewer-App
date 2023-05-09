import React, { useState } from 'react'
import HomeHeader from '../components/Header/homeHeader'
import Api from '../api/api';
import CommitsButton from '../components/Buttons/commitsButton'
import SeeCommits from '../components/Buttons/seeCommits';
import Input from '../components/Inputs/input';
import { useEffect } from 'react';

function Home() {
  const [commits, setCommits] = useState([]);
  const [ repo, setRepo ] = useState('')
  
  
  const handleChange = (e) => {
    setRepo(e.target.value)
  }

 

  const handleSearchCommits = async() => {
    try{
      const response = await Api.get('https://api.github.com/search/repositories?q=Q/language:javacsript&sort=stars&per_page=4')
      console.log(response.data)
      setCommits(response.data.items);
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    handleSearchCommits();
  }, [])

  

  return (
    <>
      <div className='body'>
        <HomeHeader />
        <div className='text'>
          <h1 className='first-text'>Discover the world of code</h1>
          <p className='second-text'>Explore open source projects from GitHub, and read their commit history to see the story of how they were built.</p>
        </div>
        <div className='input-search'>
          <Input onChange={handleChange} className="search-commit" placeholder="Eg. facebook/react"/>
          <SeeCommits text="See Commits🚀" repo={repo} />
        </div>
        <p className='option'>or pick one of the suggested repos</p>
        <span className='mapped-btns' >
        {
          commits.length > 0
          ?
        commits.map((data) => (
          
            <CommitsButton className="initial-button" key={data.id} text={data.owner.login} repo={data.full_name} />
          
        ))
        :
        ''
        }
        </span>
        
      </div>
    </>
  )
}

export default Home