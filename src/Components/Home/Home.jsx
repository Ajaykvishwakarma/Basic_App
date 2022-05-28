import * as React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import style from './Home.module.css';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';
import { Spinner } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const axios = require('axios');

 export const Home = () => {

    const navigate = useNavigate()

    const tokenStr = localStorage.getItem('token')
    const token = tokenStr ? JSON.parse(tokenStr) : navigate('/signin')

     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(false);
     const [data, setData] = useState([]);
     const [page, setPage] = useState(1);
     const [priceorder, setPriceorder] = useState('');
     const [filterprice, setFilterprice] = useState(0);
     const [text, setText] = useState("")
     const [q, setQ] = useState("");

     useEffect(() => {
         if(page>=1){
            fetchData({page, priceorder, filterprice, q})
         }
         
     },[page, priceorder, filterprice, q])


     const fetchData = async ({page, priceorder, filterprice, q}) => {
         setLoading(true);


         axios({
             method : 'get',
             url: "https://axiosbasicapp.herokuapp.com/users",
             params: {
                 _page: page,
                 _limit: 10,
                 _sort: 'price',
                 _order: `${priceorder}`,
                 q: q,
                price_gte: filterprice,
             }
         }).then((res) => {
            //  console.log(res)
             setData(res.data);
             setLoading(false);
         })
         .catch(err => {
             setError(true);
             setLoading(false)
         })
     }
   
     const handleDelete = async (id) => {
        setLoading(true);


       

        axios.delete(`https://axiosbasicapp.herokuapp.com/users/${id}`)
        // .then(res => console.log(res.data));
        axios({
            method : 'get',
            url: "https://axiosbasicapp.herokuapp.com/users",
            params: {
                _page: page,
                _limit: 10,
                _sort: 'price',
                _order: `${priceorder}`,
                q: q,
                price_gte: filterprice,
            }
        }).then((res) => {
           //  console.log(res)
            setData(res.data);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setLoading(false)
        })
            // const deletedTodo = data.filter((item) => item.id !== id);
            // setData(deletedTodo)
            //console.log(status)
        
        }

        const handleChange = (event) => {
            setFilterprice(event.target.value);
          };

    return loading ? (<div style={{marginTop:"300px"}}>
        <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        />
        </div>  ) : (
            <>
        <div>
        <div className={style.active}>
            <div><Button colorScheme='purple' className={style.btn} onClick={() => {setPriceorder("asc")}}>ASC</Button><Button colorScheme='purple' className={style.btn} onClick={() => {setPriceorder("desc")}}>DESC</Button></div>
            <div><Button colorScheme='purple' className={style.btn} onClick={() => {setPage(page-1)}}>Prev</Button><Button colorScheme='purple' className={style.btn} onClick={() => {setPage(page+1)}}>Next</Button></div>
            <div>
            <Select placeholder='Filter Price' onChange={handleChange}>
                <option value={200}>Above Rs. 200</option>
                <option value={500}>Above Rs. 500</option>
                <option value={700}>Above Rs. 700</option>
            </Select>
            </div>

            <div><Input value={text} onChange={(e) => setText(e.target.value)} placeholder='Search Guys' className={style.inputBox}/><IconButton aria-label='Search database' icon={<SearchIcon />} className={style.searchBtn} onClick={() => setQ(text)} /></div>
            </div>
           <div className={style.container}>

               {data.map((el) => (
               <div className={style.holder} key={el.id}>
                   <div className = {style.avatarDiv}>
                    <img className={style.avatar} src={el.avatar} alt={el.username}/>
                    <h2 style={{fontWeight:"bolder"}}>{el.username}</h2>
                   </div>
                   <div className={style.detailsDiv}>
                    <h1>Name : {el.name}</h1>
                    <h3>Email : {el.email}</h3>
                    <h4>Country : {el.country}</h4>
                    <h4>Sector : {el.sector}</h4>
                    <h4>Price : {el.price}</h4>
                   </div>
                   <div className={style.financeDiv}>
                  
                   <ButtonGroup gap='4'>
                    <Link to ={`/details/${el.id}`}><Button colorScheme='whatsapp'>More</Button></Link>
                    <Button colorScheme='red' onClick={() => {handleDelete(el.id)}}>Delete</Button>
                    </ButtonGroup>
                                    
                   </div>
               </div>
               
                ))}
           </div>
           
           {/* <div className={style.pagination}>
                    <Link to="#">&laquo;</Link>
                    {totalpage?.map(pages => <Link to={""} key={pages} className={pages == page ? "active" : ""} onClick={() => pageChange(pages)}>{pages}</Link>)}
                    <Link to="#">&raquo;</Link>
            </div> */}
       
        </div>
        </>
    )
 }


//  const PaginationComponent = ({
//     currentPage,
//     lastPage,
//     onPageChange
//   }) => {
//     const arr = new Array(lastPage).fill(0);
//     return (
//       <div>
//         {
//           arr.map( (item, page)=> <button onClick={()=>onPageChange(page+1)} disabled={(page+1)===currentPage}> {page+1} </button> )
//         }
//       </div>
//     )
//   }