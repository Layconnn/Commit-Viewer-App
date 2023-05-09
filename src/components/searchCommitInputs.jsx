import Input from "./Inputs/input";
import SeeCommits from "./Buttons/seeCommits";
import { React, useState, useEffect } from 'react'
import Api from "../api/api";
import CommitsButton from "./Buttons/commitsButton";
import { useNavigate } from "react-router-dom";
function SearchCommitInputs() {
  const [ repo, setRepo ] = useState('')
  const handleChange = (e) => {
    setRepo(e.target.value)
  }
  
 {/*
  const [whenLoading, setWhenLoading] = useState(false)
  const [valid, setValid] = useState([])
   
  const locate = useNavigate();

  
  const handleCommitList = async() => {
    setWhenLoading(true)
    try{
      const response = await Api.get(`https://api.github.com/search/commits?q=Q/${valid}`)
      console.log(response.data)
      setValid(response.data)
    } 
    catch(err){
      console.log(err)
    }
    finally {
      setWhenLoading(false)
    }
  }

  useEffect(() => {
    handleCommitList();
    valid.length > 0
    ?
    locate('/view-commits')
    :
    ''
  }, [])
*/}
  return (
    <>
        <div className="form">
            <Input onChange={handleChange} className="search-input" placeholder="Eg. facebook/react" />
            <SeeCommits text="See Commits🚀" repo={repo} />
        </div>
        {/* {whenLoading && <h5>Loading...</h5>}
        {
          !whenLoading 
          && 
          valid.length > 0
          ?
        valid.map((data) => */} 
            <h5>{repo}</h5>
    </>
    )
  }

export default SearchCommitInputs
