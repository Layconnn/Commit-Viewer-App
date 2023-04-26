import React from "react";
import { useEffect, useState } from "react";
import '../styles/global.scss';
import Router from "../router/router";
import api from "../api/api";

function App() {
  const [info, setInfo] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const createApiCall = async() => {
    setIsLoading(true)
    try{
      const response = await api.get('/info')
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


  return (
    <>
      <Router />
      {isLoading && <h5>Loading Repos</h5> }
      {
        info.length > 0 
        ?
        info.map(() => {
          return(
            <div key={id}>
              <h4>{}</h4>
              <p>{}</p>
              <p>{}</p>
            </div>
          )
        })
        :
        <h5>No data Avaialable</h5>
      }
    </>
  )
}

export default App
