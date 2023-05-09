import React from "react";
import { useEffect, useState } from "react";
import '../styles/global.scss';
import Router from "../router/router";
import api from "../api/api";

function App() {
  {/*const [info, setInfo] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const createApiCall = async() => {
    setIsLoading(true)
    try{
      const response = await api.get('repositories')
      console.log(response.data)
      setInfo(response.data);
    }
    catch(err){
      console.error(err)
    }
    finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    createApiCall();
  }, [])
*/}

  return (
    <>
      <Router />
     {/* { isLoading && <h5>Loading Repos</h5> }
      {
        !isLoading
          &&
        info.length > 0 
        ?
        info.map((data) => {
          return(
            <div key={data.id}>
              <p>{data.node_id}</p>
              <p>{data.name}</p>
              <p>{data.full_name}</p>
            </div>
          )
        })
        :
        <h5>No data Avaialable</h5>
      }
      */}
    </>
  )
}

export default App
