import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { http } from '../axios'


function Details() {
  const params = useParams()
  const {id} = params
  const [product, setProduct] = useState({});
  const [color, setColor] = useState('')

  useEffect(() =>{
    http.get(`products/${id}`)
    .then(data =>{
      setProduct(data.data.data)
      setColor(data.data.data.attributes.color[0])
      console.log(data.data.data);
    })
    .catch(err =>{
      console.log(err);
    })
  },[])
  return (
    <div className='continer1'>
        {
          product.id  && <>
             <div className='details_cont'>
              <img className='details_img' src={product.attributes.image} alt="" />
              <div>
                <h1>{product.attributes.title}</h1>
                <p>{product.attributes.company}</p>
                <h4>{product.attributes.price}</h4>
                <p>{product.attributes.description}</p>

                {/* <div>
                  {
                    product.attributes.colors.length > 0 &&
                    product.attributes.colors.map((colorProduct) =>{
                      return (
                        <span>
                          style = {{
                            bacgroundColor: colorProduct,
                            border:
                            color == colorProduct ? '3px solid black' : 'none',
                          }}

                        </span>
                      )
                    })
                  }
                </div> */}
              </div>
          </div>
          </>
        }
    </div>
  )
}

export default Details