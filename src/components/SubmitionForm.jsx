import React from "react";
import { useState } from "react";
import { Button, Container, Form, Row }from "react-bootstrap"
import axios from "axios";
import './SubmitionForm.css'
import { Link } from 'react-router-dom';
function SubmitionForm(){
    const[title,setTitle] = useState('')
    const[shape,setShape] = useState('')
    const[x1,setXone] = useState('')
    const[y1,setYone] = useState('')
    const[x2,setXtwo] = useState('')
    const[y2,setYtwo] = useState('')
    const[radius,setRadius] = useState('')
    const[msg,setMsg] = useState('')

    const handleSubmit = ()=>{
        console.log("hiii")
        if (shape =="rect"){
            const data = {
                'title':title,
                'shape':shape,
                'x1':x1,
                'y1':y1,
                'x2' : x1,
                'y2':y2
            }
            axios.post('http://127.0.0.1:8000/registration',data)
            .then((res)=>{
                setMsg('sucessfully added')
            }).catch((err)=>{
                setMsg('an error occured')

            })
        }
        else{
            const data = {
                'title':title,
                'shape':shape,
                'x1':x1,
                'y1':y1,
                'radius':radius
            }
            axios.post('http://127.0.0.1:8000/registration',data)
            .then((res)=>{
                setMsg('sucessfully added')
            }).catch((err)=>{
                setMsg('an error occured')
            })
        }
        
    }


    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="title">
                    <h1>Register</h1>
                </div>
                <div className="body">
                    <Container className="main_div">
                        <Row>
                            <Form.Control onChange={(e)=>{setTitle(e.target.value)}} type="text" className="input" placeholder="Title" name="title"/>
                        </Row>
                        <Row>
                            <Form.Select type="text" placeholder="Shape" className="select" name="shape" onChange={(e)=>{setShape(e.target.value)}}>

                                <option>select shape</option>
                                <option value="rect">Rectangle</option>
                                <option value="circle">Circle</option>
                            </Form.Select>
                        </Row>
                        <Row className="row1">
                            <Row>
                            <Form.Control type="text" className="input1" placeholder="X" name="x1" onChange={(e)=>{setXone(e.target.value)}}/>
                            <Form.Control type="text" className="input1" placeholder="Y" name="y1" onChange={(e)=>{setYone(e.target.value)}}/>
                        </Row>
                        <Row>
                            {shape=="rect" && <><Form.Control type="text" className="input1" placeholder="X" name="x1" onChange={(e)=>{setXtwo(e.target.value)}}/>
                            <Form.Control type="text" placeholder="Y" className="input1" name="y1" onChange={(e)=>{setYtwo(e.target.value)}}/></>}
                            
                            {shape=="circle" && <Form.Control type="text" placeholder="radius" className="input1" name="radius" onChange={(e)=>{setRadius(e.target.value)}}/>}
                        </Row>
                        </Row>
                        
                        
                    </Container>
                    <p>{msg}</p>
                </div>
                <div className="footer">
                    <button
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <Link to="/"><button>
                    Cancel
            </button></Link>
                    
                </div>
            </div>
        </div>
    )

}


export default SubmitionForm;