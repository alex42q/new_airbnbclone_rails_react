import React, { useState, useEffect } from 'react'
import classes from "./MainPageAds.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faAmbulance,
    faArrowRight,
    faArrowLeft
  } from "@fortawesome/free-solid-svg-icons";
  import axios from 'axios';
  import Link from 'next/link';

function MainPageAds(props) {
    const [count, setCount] = useState(0)

    const addPlus = () =>{
        if (count > props.images.length - 2){
            setCount(0)
        }else{
            setCount(count+1)
        }
    }

    const meionPlus = () =>{
        setCount(count - 1)
        if(count === 0){
            setCount(0)
        }
    }
  return (
      
    <div onClick={(e)=>{
    axios.get(`http://localhost:5000/api/v1/ads/${props.slug}`)
        .then(res=>{
            console.log(res.data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }}>
        <div className='relative'>
        <div className={classes.arrows}>
        <div>
        <FontAwesomeIcon className={classes.arrow} onClick={meionPlus} color="black" icon={faArrowLeft} />
        </div>
        <div>
            <FontAwesomeIcon className={classes.arrow} onClick={addPlus} color="black"  icon={faArrowRight} />
        </div>
        </div>
        <div>
        <img className={classes.image} src={props.images[count]}></img>
        </div>
   
            <div className={classes.dots}>
            <div className='flex items-center'>
            {props.images.map((items, index)=>{
                return(<div>
                   {index === count ? <h5 className={classes.dotActive}>.</h5> : <h5 className={classes.dotNoActive}>.</h5>}
                   </div>
                )
            })}
            </div>
            </div>
        </div>
        <Link href={`/${props.slug}`}>
        <div className='mt-4'>
        
            <h5 className='font-bold'>{props.name}</h5>
            <p className={classes.greytext}>{props.description}</p>
            <p className={classes.greytext}>{props.date}</p>
            <h5 className='font-bold'>{props.price}</h5>
           
        </div>
        </Link>
    </div>
    
  )
}

export default MainPageAds