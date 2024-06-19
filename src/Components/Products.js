import React, { useState,useEffect} from 'react'

const Products = () => {
    const [Products,setProducts]=useState([])

    useEffect(() =>{
    const fetchProducts = async() =>{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data);
        setProducts(data);
    }
    fetchProducts();
    },[])

  return (
    <div className='productsWrapper'>
        {
             Products.map(product=>{
                return <div className='card' key={product.id}>
                         <img src={product.image} alt={product.title}/>
                         <h4>{product.title}</h4>
                         <h5>{product.price}</h5>
                         <button className='btn'>Add To Cart</button>


                       </div>
             })
        }
    </div>
  )
}

export default Products
