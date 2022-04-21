import React from 'react'
import { useState } from 'react'

const AdminDialForm = () => {

    const [type, setType]=useState('')
    const [movements, setMovements]=useState('')
    
    const[material, setMaterial]=useState('')

    const[finish,setFinish]=useState('')
    
    const[color, setColor]=useState('')