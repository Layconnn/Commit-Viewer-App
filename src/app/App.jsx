import React from "react";
import { useEffect, useState } from "react";
import '../styles/global.scss';
import Router from "../router/router";
import api from "../api/api";

function App() {
  const [info, setInfo] = useState([])

  const createApiCall = async() => {
    try{
      const response = await api.get('/info')
      console.log(response.data)
      setInfo(response.data);
    }
    catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
    createApiCall();
  }, [])

  const APIS = info.map((data) => {
    return(
      <tr>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
      </tr>
    )
  })
  return (
    <>
      <Router />
      <table>
      <tr>
        <td>IDS</td>
        <td>TITLES</td>
        <td>BODY</td>
      </tr>
      {APIS}
    </table>
    </>
  )
}

export default App
