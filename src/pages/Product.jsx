import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { Button } from '../components';
export function Product() {
  const Products = useLoaderData();
  console.log(Products)
  return (
    <div className='container mt-5'>
    <div className='d-flex flex-wrap justify-content-between gap-4'>
    {
      Products?.map((item)=>{
        return <div className='card product-card border-0 ' key={item.id} style={{width:"300px"}}>
        <div className='card-body d-flex flex-column justify-content-between'>
        <div className='card-img d-flex justify-content-center align-items-center'>
        <img src={item.image} alt="Product img" style={{maxWidth:"150px",maxHeight:"150px",minHeight:"150px"}}/>
        </div>
        <h5 className='card-title'>{item.title}</h5>
        <p className='card-text'>{item.description.slice(0,100)+"..."}</p>
        <h5 className='card-title'>${item.price}</h5>
        <Button type='button' className='btn-success align-self-start' lable="Add to Cart"></Button>
        </div>
        </div>
      })
    }
    </div>
    </div>
  )
};

export const LoadProducts= async ()=>{
const res = await fetch('https://fakestoreapi.com/products'); 
return res.json();
}
