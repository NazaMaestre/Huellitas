import React from 'react'
import styles from "./gratitude.module.css";
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";
import { useDispatch } from 'react-redux';
import {donation, updateCollected } from "../../redux/actions";
import { Link} from "react-router-dom";
function Gratitude() {
  
const dispatch = useDispatch()
const [searchParams] = useSearchParams();
const cuenta = true
const [data, setData] = useState({
  amount: "",
  campaignId:"",
  userId: "",
  status:"approved"
})

  // useEffect(() => {
  // let datos = JSON.parse(localStorage.getItem('datosDonacion'))
  // setData(datos)
 
  // }, [])

  // const status = (searchParams.get('status'))
  
  
  // dispatch(updateCollected(data.campaignId, {collected: data.amount }))
  // console.log(data);
  
  return (
    
    <div className={styles.body}>


        <div className={styles.gracias}>
        
        <img src='https://i.pinimg.com/originals/74/88/22/7488228009d153e94a00427f674d54bb.jpg' className={styles.img}></img>
        <h1>¡¡¡Gracias por tu generosidad!!!</h1>
        <p></p>
        </div>
        <Link to={"/home"} className={styles.icon}>
                    <Icon  icon="pajamas:go-back" width="80px"/>
                  </Link>
    </div>

  )
}
export default Gratitude;