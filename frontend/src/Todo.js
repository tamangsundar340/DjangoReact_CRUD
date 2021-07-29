import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


export default function Todo() {

    const [todos, setTodos] = useState([])
    // this state is to create new one
    const[tododata, setTodoData] = useState({
        title : "",
        description : "",
    })
    const[todoset, toDoSet] = useState({
        btnDisabled: true,
    })
    const[status, setStatus] = useState()

    // fetch data 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/')
                setTodos(res.data);
            }
            catch (err) {
                console.log("Something went wrong")
            }
        }

        fetchData();
    }, [])

    const onChangeInput = (event) =>{
        setTodoData({
            ...tododata,
            [event.target.name] : event.target.value
        })
        if(tododata.title != "" && tododata.description != ""){
            toDoSet({btnDisabled:false})
        }else{
            toDoSet({btnDisabled:true})
        }
    }

    const onSubmitData = async (event) =>{
        event.preventDefault();
        try{
            await axios.post(`http://127.0.0.1:8000/create`, tododata)
            setStatus(true)
        }catch(err){
            console.log(err)
        }
    }

    // delete funciton

    const handleDelete = async (id) =>{
        await axios.delete(`http://127.0.0.1:8000/delete/${id}/`)
        var newtodos = todos.filter((item) =>{
            return item.id != id;
        })
        setTodos(newtodos)
    }

    if(status){
        return <Todo />
    }
    return (
        <div className="container py-5 row ">
            <div className="col-md-6 col-sm-12">
                {
                    todos.map((todo, i) => {
                        return (
                            <div key={i}>
                                <p>Title : {todo.title}</p>
                                <p>Description : {todo.description}</p>
                                <Link className="btn btn-info btn-sm m-1" to={`/edit/${todo.id}`}>Edit</Link>
                                <Link className="btn btn-success btn-sm m-1" to={`/detail/${todo.id}`}>Detail</Link>
                                <Link className="btn btn-danger btn-sm m-1" onClick={() =>handleDelete(todo.id)} >Delete</Link>
                                <hr />
                            </div>

                        )
                    })
                }
            </div>
            <div className="col-md-6 col-sm-12">
                <Form onSubmit= {onSubmitData}>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter todo list " name="title" 
                        onChange={(e) => onChangeInput(e)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Description.." name="description"
                        onChange={(e) => onChangeInput(e)}
                        />
                    </Form.Group>
                    <Button variant="success" type="submit" disabled={todoset.btnDisabled}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}
