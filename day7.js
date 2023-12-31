import React from "react";
import axios from'axios';
import { useState,useEffect } from "react";
const DataFetchingExample=()=>{
    const[post,setPost]=useState([]);
    const apiurl=" http://localhost:3001/data";
    useEffect(()=>{
        axios.get(apiurl)
            .then((response)=>{setPost(response.data);})
            .catch((error)=>{
                console.error("Error Fetching data..",error);
            });
    },[]);
    return(
        <div>
            <h2>Backend Datas</h2>
            <ul>
                {post.map((data) => (

                    <li key={data.id}>{data.title}-{data.author}</li>
                ))}
            </ul> 
        </div>
    );
};
export default DataFetchingExample;