import { React, useState, useEffect } from 'react'
import Input from '../components/Inputs/input'
import SeeCommits from '../components/Buttons/seeCommits'
import Api from '../api/api'
import { useLocation } from 'react-router-dom'


function ViewCommitsPage() {
  const [ commits, setCommits ] = useState([])
  const [data, setData] = useState('')

  const locate = useLocation();

  useEffect(() => {
    setData(locate.state.data)
  },[])

  useEffect ( () =>{
    Api.get(`https://api.github.com/search/commits?q=/${data.full_name}`)
      .then(response => {
        setCommits(response.data.items)
        console.log(response.data)
      })
  }, [])



  return (
    <>
        <div className='commit-head'>
            <h2>CommitViewer</h2>
            <div className='input-searching'>
              <Input placeholder="Eg. facebook/react"  className="search-commit"/>
              <SeeCommits text="See Commits🚀" />
            </div>
        </div>
        <h3>{data?.name}</h3>
        <div>
            {commits.map((commit, key) => {
              return <>
                <div className='update-container' key={key}>
                    <div className='profiles'>
                        <img src={commit?.author?.avatar_url} className='profile-container' />
                        <h5 className='person-name'>{commit.commit.author.name}</h5>
                    </div>
                    <h6>{commit.commit.message}</h6>
                    <p className='date'>{commit.commit.committer.date}</p>
                </div>
                </>
            })}
        </div>
    </>
  )
}

export default ViewCommitsPage
