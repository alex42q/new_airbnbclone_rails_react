import React, { useState } from 'react'
import Nav from '../components/Nav/Nav'
import classes from "../styles/Home.module.css"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTriangleExclamation,
    faDoorClosed,
    faCalendar,
    faStar
  } from "@fortawesome/free-solid-svg-icons";

function slug({ads}) {
    const arr = new Array()
  return (
    <div className={classes.adsMainBigCon}>
        <nav>
            <Nav />
        </nav>
        <div className={classes.bigContainer}>
        <div>
                <h1 className='font-bold text-2xl'>{ads.name}</h1>
                <p className='underline underline-offset-2 mb-5'>Vestervig, Denmark</p>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                <div>
                    <img className={classes.baseImg} src={ads.images[0]} />
                </div>
                <div className={classes.containerSlug}>
                    {ads.images.slice(1).map((items, index)=>{
                        return(<div className={classes.containerDiv}>
                        <img className={classes.image} src={items} />
                        </div>)
                    })}
                </div>
            </div>
            <div className='flex justify-between mt-5'>
            <div className='mr-10'>
            <div className='flex w-full justify-between'>
            <div>
            <h2>{ads.name}</h2>
                <ul className='ml-5 list-disc flex items-center'>
                    <li className='mr-5'>6 guests</li>
                    <li className='mr-5'>3 bedrooms</li>
                    <li className='mr-5'>2 beds</li>
                    <li className='mr-5'>2 bats</li>
                </ul>
            </div>

                <div>
                    <img className={classes.adsmallImg} src='https://a0.muscache.com/im/pictures/user/e16a675c-fadc-45ae-969a-9e0000b414aa.jpg?im_w=240'></img>
                </div>
                </div>
                <div className='mt-5 mb-5'>
                    <hr></hr>
                </div>
                <div>
                    <div className='flex mb-5'>
                        <div className='mr-3'>
                        <FontAwesomeIcon icon={faTriangleExclamation} />
                        </div>
                      <div>
                          <h5 className='font-bold mb-3'>Designed By</h5>
                          <p>Meredith Higgins & Bryant Gingerich <br></br>
                            Renee Byler, Burrow Creative</p>
                      </div>
                    </div>
                    <div className='flex mb-5'>
                        <div className='mr-3'>
                        <FontAwesomeIcon icon={faDoorClosed} />
                        </div>
                      <div>
                          <h5 className='font-bold mb-3'>Self check-in</h5>
                          <p>Check yourself in with the lockbox.</p>
                      </div>
                    </div>
                    <div className='flex mb-5'>
                        <div className='mr-3'>
                        <FontAwesomeIcon icon={faCalendar} />
                        </div>
                      <div>
                          <h5 className='font-bold mb-3'>Free cancellation for 48 hours</h5>
                      </div>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <div>
                        <img className={classes.aliCoverIMg} src='https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg'></img>
                    </div>
                    <div>
                        <p>Every booking includes free protection from Host cancellations, listing inaccuracies, and <br></br> other issues like trouble checking in.</p>
                        <p className='underline underline-offset-2 mb-5'>Learn more</p>
                    </div>
                </div>
                <hr></hr>
                <div className='mt-5 mb-5'>
                    <p>The Dunlap Hollow A-Frame is a new build that will be completed in mid-March 2021. We are offering prebooking now with reservation dates beginning April 1, 2021. The A-Frame sleeps up to 10 guests with 3 bedrooms and a picturesque loft filled with windows that sleeps 4. Here is a list of the beds in each room </p>
                    <p>Bedroom 1: King ...</p>
                </div>
                <hr></hr>
            </div>
            
 
            <div className={classes.priceAd}>
                <div className=''>
                    <div className='flex w-full justify-between items-center'>
                        <div className='mb-3 mt-3'>
                            <h5 className='font-bold text-xl'>621 night</h5>
                        </div>
                        <div className='flex items-center'>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <p>4.95</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <input className={classes.inputad} type="date"></input>
                    <input className={classes.inputad} type='date'></input>
                </div>
                <div>
                    <select className={classes.inputAdSelect}>
                        <option selected>1 guest</option>
                    </select>
                </div>
                <div className='mt-3 mb-3'>
                    <button className={classes.adButton}>Reserve</button>
                </div>
                <div className='mt-3 mb-3'>
                    <p>You won't be charged yet</p>
                </div>
                <div className='mt-3 mb-3'>
                    <hr></hr>
                </div>
                <div className='flex justify-between'>
                    <h5>Total</h5>
                    <h5>5,612</h5>
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default slug

export async function getServerSideProps(context){
    const { slug } = context.params
    const res = await axios.get(`http://localhost:5000/api/v1/ads/${slug}`)
    console.log(res.data.data)

    return {
        props:{
            ads:res.data.data
        }
    }
}