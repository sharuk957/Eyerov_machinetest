import React from "react";
import ModalBox from "./ModalBox";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Table } from "react-bootstrap";


function Imagecontainer() {
    const [modalIsOpen, setModalIsOpen] = useState({title:" ",coords:" ",shape:" ",flag:false});
    const [storedData,setData] = useState('')
    console.log(storedData);
    const ModalHandler = (e)=>{
        setModalIsOpen({
            title: e.title,
            coords : e.coords,
            shape : e.shape,
            flag : e.flag
        })
        console.log(modalIsOpen)
        
    }
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/registration')
            .then((res)=>{
                console.log(res);
                setData(res.data)
            }).catch((err)=>{
                alert("error occured")
            })
        
    }, [])
    
    return (
        <div className="imageView">
            <h2>Image Maps</h2>
            <img src="image/sonar_map.png" alt="" useMap="#workmap" width="400" height="379" />
            <map name="workmap">
                <area shape="rect" coords="55,167,764,270" onMouseOver={()=>ModalHandler({title:"Step - Apron step",flag:true,shape:"rect",coords:"55,167,764,270"})} />
                {/* {(storedData)?(storedData.map((value,key)=>{ return  <area key={key} shape={value.title} coords={value.coords} onMouseOver={()=>ModalHandler({
                    title:"value.title",flag:true,shape:"value.shape",coords:"value.coords"
                })} />

                
    })):<></>} */}
            </map>

            {modalIsOpen.flag && <ModalBox setOpenModal={setModalIsOpen} property={modalIsOpen} />}
            <br/>
            <Link to="/"><button className="backtohome">
                    Back To Home
            </button></Link>
            
            <Table className="tableclass" >
            <thead>
                <tr >
                <th>Title</th>
                <th>Coordinate</th>
                <th >Shape</th>
                </tr>
            </thead>
            <tbody>
            {(storedData)?(storedData.map((value,key)=>
                   <tr key={key}>
                   <th>{value.title}</th>
                   <th>{value.coords}</th>
                   <th>{value.shape}</th>
                   </tr>
                
                
                )):
                <></>}
            </tbody>
            </Table>
        </div>
    );
}

export default Imagecontainer