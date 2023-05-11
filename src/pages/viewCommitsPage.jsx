import { React, useState, useEffect } from 'react'
import Input from '../components/Inputs/input'
import SeeCommits from '../components/Buttons/seeCommits'
import Api from '../api/api'
import { useLocation } from 'react-router-dom'


function ViewCommitsPage() {
  const [ commits, setCommits ] = useState([])
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState('')

  const locate = useLocation()

  useEffect(() => {
    setData(locate.state.data)
  }, [])
  

  const fetchApi = async() => {
    setLoading(true)
    try{
      const response = await Api.get(`https://api.github.com/search/commits?q=/${data.full_name}`)
      setCommits(response.data.items)
      console.log(response.data)
    }
    catch(err){
      console.log(err)
    }
    finally{
      setLoading(false)
    }
  }


  useEffect(() => {
    fetchApi();
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
        {loading && <h5>Loading...</h5>}
        <div>
          {
           !loading
           &&
           commits.length > 0 
           ?
             commits.map((commit, key) => {
              return <>
              <h6 className='checkout'>{commit.commit.message}</h6>
                <div className='update-container' key={key}>
                  
                    <div className='profiles'>
                        <img src={commit?.author?.avatar_url} className='profile-container' />
                        <h5 className='person-name'>{commit.commit.author.name}</h5>
                    </div>
                    <h6 className='message'>{commit.commit.message}</h6>
                    <p className='date'>{commit.commit.committer.date}</p>
                </div>
                </>
            })
            :
            ''
          } 
        </div>
      
    </>
  )
}

export default ViewCommitsPage
