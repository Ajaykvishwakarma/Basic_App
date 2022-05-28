import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from '../Home/Home.module.css';

import { useNavigate } from 'react-router-dom';
export const Details = () => {


    const navigate = useNavigate()

    const tokenStr = localStorage.getItem('token')
    const token = tokenStr ? JSON.parse(tokenStr) : navigate('/signin')

    const { id } = useParams()
    const [data, setData] = useState([])
    
    // console.log(id)
    useEffect(() => {
        fetchData(id)
    },[])

    const fetchData = async (id) => {

        axios.get(`https://axiosbasicapp.herokuapp.com/users/${id}`).then(res => setData(res.data) )

    }

    // console.log(data)

    return (
        <div>
                       <div className={style.container}>

                    {/* {data?.map((el) => ( */}
                    <div className={style.holder} key={data.id}>
                        <div className = {style.avatarDiv}>
                        <img className={style.avatar} src={data.avatar} alt={data.username}/>
                        <h2 style={{fontWeight:"bolder"}}>{data.username}</h2>
                        </div>
                        <div className={style.detailsDiv}>
                        <h1>Name : {data.name}</h1>
                        <h3>Email : {data.email}</h3>
                        <h4>Country : {data.country}</h4>
 
                        </div>
                        <div className={style.financeDiv1}>
                        <h4>Sector : {data.sector}</h4>
                        <h4>Price : {data.price}</h4>
                        <h4>Gender : {data.gender}</h4>
                                        
                        </div>
                    </div>

                    {/* ))} */}
                    </div>
        </div>

    )
}