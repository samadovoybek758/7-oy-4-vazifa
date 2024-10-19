import React, { useEffect, useState } from "react";
import { http } from "../axios";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    http
      .get("products?featured=true")
      .then((data) => {
        setData(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();
  function handleCard(id) {
    navigate(`/products/${id}`);
  }

  return (
    <>
      <div className="w-[1200px] mx-auto mb-10"> 
          <div>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">We are changing the way people shop</h1>
            <p className="mb-8 mt-8 max-w-xl text-lg leading-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis</p>
            <button className="btn btn-primary">OUR Products</button>
            <div className="border-b border-base-300 pb-5 mt-20">
            <h2 className="text-3xl font-medium tracking-wider capitalize">Featured Products</h2>
            </div>
        
          </div>
        </div>


        <div className="continer1">
          {data.length > 0 &&
            data.map(function (data) {
              return (
                <div
                  className="card"
                  onClick={() => {
                    handleCard(data.id);
                  }}
                  key={data.id}
                >
                  <img className="w-36" src={data.attributes.image} alt="" />
                  <h1 className="text-3xl">{data.attributes.company}</h1>
                  <p>{data.attributes.price}</p>
                </div>
              );
            })}
        </div>
    </>
  );
}

export default Home;
