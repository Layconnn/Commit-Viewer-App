import React, { useState } from 'react'
import HomeHeader from '../components/Header/homeHeader'
import Api from '../api/api';
import CommitsButton from '../components/Buttons/commitsButton'
import SeeCommits from '../components/Buttons/seeCommits';
import Input from '../components/Inputs/input';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const [commits, setCommits] = useState([]);
  const [ repo, setRepo ] = useState('')
  const [change, setChange] = useState([])
  const [loading, setLoading] = useState(false)
  
  
  const handleChange = (e) => {
    setRepo(e.target.value)
  }

  const getCommits = async() => {
    setLoading(true)
    try{
      const response = await Api.get('https://api.github.com/search/repositories?q=' + repo )
      setChange(response.data.items)
    }
    catch(err){
      console.log(err)
    }
    finally{
      setLoading(false)
    }
  }

  const handleSearchCommits = async() => {
    try{
      const response = await Api.get('https://api.github.com/search/repositories?q=language:javaScript+sort:stars&per_page=4')
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
        <HomeHeader />
        <div className='text'>
          <h1 className='first-text'>Discover the world of code</h1>
          <p className='second-text'>Explore open source projects from GitHub, and read their commit history to see the story of how they were built.</p>
        </div>
        <div className='input-search'>
          <Input onChange={handleChange} className="search-commits" placeholder="Eg. facebook/react"/>
          <SeeCommits text="See Commits🚀" onClick={() => getCommits()} />
        </div>
        { loading && <h5 className=''>Loading...</h5>  }
        {/*<div className='mapped-section' >*/}
        { !loading && change.length > 0
        ?
         <h5 className='searched'>Searched Results</h5>
        :
        ''
        }
        <div className='mapped-results'>
        {
            change.length > 0
            ?
            change.map((java) => (
              
              <>
                  <CommitsButton className="initial-button" key={java?.id} text={java.name} repo={java.full_name} />
              </>
            ))  
            :
            '' 
        }
        </div>
       {/* </div> */}
        <p className='option'>or pick one of the suggested repos</p>
        <div className='mapped-btns' >
        {
          commits.length > 0
          ?
          commits.map((data) => (
            <CommitsButton className="initial-button" key={data?.id} text={data.name} repo={data?.full_name} />
          ))
          : 
          ''
        }
        </div>
    </>
  )
}

export default Home