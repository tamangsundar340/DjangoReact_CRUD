import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';


const Detail = (props) => {
    // const id = props.match.params.id
    const {id} = useParams()
    const history = useHistory()

    const[state, setState] = useState({})

    useEffect(() =>{
        const fetchData = async() =>{
            try{
                const res = await axios.get(`http://127.0.0.1:8000/detail/${id}/`)
                setState(res.data)
                console.log(res.data)
            }catch(err){
                console.log("Something went wrong")
            }
        }

        fetchData();
    },[id])

    const handleHistory = () =>{
        history.push("/")
    }

    return (
        <div className="container py-3">
            <h6 className="text-center">Detail</h6>
            <hr />
            <p className="text-muted">Title : {state.title}</p>
            <p className="text-muted">Description : {state.description}</p>
            <br />
            <button className="btn" onClick={handleHistory}> Back to home</button>
        </div>
    )
}
export default Detail