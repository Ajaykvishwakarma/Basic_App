import * as React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import style from './Home.module.css';
import { Button, ButtonGroup } from '@chakra-ui/react';
import axios from 'axios';
 export const Home = () => {

     

    return (
        <div>
           <div className={style.container}>
               <div className={style.holder}>
                   <div className = {style.avatarDiv}>
                    <img className={style.avatar} src='https://robohash.org/voluptatesdistinctioeos.jpg' alt='username'/>
                    <h2 style={{fontWeight:"bolder"}}>dsharpleypi</h2>
                   </div>
                   <div className={style.detailsDiv}>
                    <h1>Name</h1>
                    <h3>Email</h3>
                    <h4>Country</h4>
                    <h4>Sector</h4>
                    <h4>Price</h4>
                   </div>
                   <div className={style.financeDiv}>
                  
                   <ButtonGroup gap='4'>
                    <Button colorScheme='whatsapp'>More</Button>
                    <Button colorScheme='blackAlpha'>Delete</Button>
                    </ButtonGroup>
                                    
                   </div>
               </div>

           </div>
        </div>
    )
 }


 