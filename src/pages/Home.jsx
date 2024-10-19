import React, { useEffect, useState } from 'react'
import { http } from '../axios';
import '../App.css'
import { useNavigate } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    http.get('products?featured=true')
      .then(data =>{
       
        setData(data.data.data)
      })
      .catch(err =>{
        console.log(err);
      })
  },[])

  const navigate = useNavigate()
  function handleCard(id) {
    navigate(`/products/${id}`)
  }

  return (
    <div className='continer1'>
      {
        data.length > 0 && data.map(function (data) {
          return( 
            <div className='card' onClick={() =>{handleCard(data.id)}} key = {data.id}>
               
               <img className='w-36' src={data.attributes.image} alt="" />
               <h1 className='text-3xl'>{data.attributes.company}</h1>
               <p>{data.attributes.price}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home