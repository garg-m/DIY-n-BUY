import React from 'react'
import { useState } from 'react'

const AdminChapterRingForm = () => {

    const [type, setType]=useState('')
    const [movements, setMovements]=useState('')
    
    const[material, setMaterial]=useState('')
    const[finish,setFinish]=useState('')
    
    const[color, setColor]=useState('')
    const handleSubmit=(e)=>{
            e.preventDefault()
            //this.props.history.push('/admin/inventory/successpage')
            const Crown={type,movements,material,finish,color}
            console.log(Crown)
            fetch('http://localhost:3001/create/chapterRing',{
                method:'POST',
                mode:'cors',
                headers: {"Content-Type":"application/json charset=UTF-8"},
                body: JSON.stringify(Crown)
            }).then((response) => {
                if(response){
                    window.location.href = "/admin/inventory/successpage";
                }
            })
    }