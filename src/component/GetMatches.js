import React, { useEffect, useState } from 'react'
import { getMatchInfo } from '../api/api'

function GetMatches() {
    const[matches,setMatches]=useState([]);
    const limit = matches?.slice(0,5)

    useEffect(() => {
        getMatchInfo().then((data)=>{
            setMatches(data.matches)
            console.log(data)
        }).catch((err)=> console.log(err))
    },[]);
//console.log(matches);
  return (
    <>
        <Livescore limit={limit} key={limit?.unique_id}/>
    </>
  )
}

export default GetMatches
