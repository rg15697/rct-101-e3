import axios from "axios";
import React from "react";
import Product from "./Product/Product";

const Products = () => {
    const [data,setdata] = React.useState([]);
    React.useEffect(()=>{
        getdata()
    },[])

    const getdata = () =>{
        axios.get(" http://localhost:8080/products")
        .then((res)=>setdata(res.data)) 
    }

    console.log(data)
  return <div>
        {data.map((elem)=>(
             <Product key={elem.id} id={elem.id} data={elem} />
        ))}
      </div>;
};

export default Products;
