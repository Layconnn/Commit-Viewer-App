import Input from "./Inputs/input";
import SeeCommits from "./Buttons/seeCommits";
import { React, useState } from 'react'

function SearchCommitInputs() {
  const [ repo, setRepo ] = useState('')

  const handleChange = (e) => {
    setRepo(e.target.value)
  }
  return (
    <>
        <div className="form">
            <Input onChange={handleChange} className="search-input" placeholder="Eg. facebook/react" />
            <SeeCommits text="See Commits🚀" repo={repo} />
        </div>
    </>
  )
}

export default SearchCommitInputs
