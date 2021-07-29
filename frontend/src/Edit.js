import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Edit() {
    const { id } = useParams()
    const history = useHistory()

    const [todo, setToDo] = useState({
        title: "",
        description: "",
    })
    const[todoset, toDoSet] = useState({
        btnDisabled: true,
    })

    // fetch data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/detail/${id}/`)
                setToDo(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData();
    }, [id])


    // edit

    const onChangeInput = (event) =>{
        setToDo({
            ...todo,
            [event.target.name] : event.target.value
        })
        if(todo.title != "" && todo.description != ""){
            toDoSet({btnDisabled:false})
        }else{
            toDoSet({btnDisabled:true})
        }
    }

    const onSubmitData = async (event) =>{
        event.preventDefault();
        try{
            await axios.put(`http://127.0.0.1:8000/edit/${id}/`, todo)
            history.push("/")
        }catch(err){
            console.log(err)
        }
    }

    const handleHistory = () => {
        history.push("/")
    }
    return (
        <div className="container py-3">
            <h6 className="text-center">Edit</h6>
            <Form onSubmit={onSubmitData}>
                <Form.Control type="text" name="title" value={id} disabled/>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" value={todo.title}
                    onChange={(e) => onChangeInput(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" value={todo.description}
                    onChange={(e) => onChangeInput(e)}
                    />
                </Form.Group>
                <Button variant="success" type="submit" disabled={todoset.btnDisabled}>
                    Update
                </Button>
            </Form>
            <br />
            <button className="btn" onClick={handleHistory}>Back to home</button>
        </div>
    )
}
