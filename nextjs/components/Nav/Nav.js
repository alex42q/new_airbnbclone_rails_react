import React from 'react'
import classes from "./Nav.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faBars,
    faGlobe,
    faMagnifyingGlass
  } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

function Nav() {
  return (
    <Link href="/">
    <div className='flex justify-between items-center mt-5 mb-5'>
        <div>
       <img className={classes.image} src='https://miro.medium.com/max/1400/0*NChTo-XqLOxLabIW'></img>
        </div>
        <div className={`flex items-center ${classes.navBorder}`}>
            <div className='mr-5'>
                <h3 className={classes.anywhere}>Anywhere</h3>
            </div>
            <h1 className={classes.anywhereborder}></h1>
            <div className='mr-5'>
                <h3 className={classes.anywhere}>Any week</h3>
            </div>
            <h1 className={classes.anywhereborder}></h1>
            <div className='mr-5 flex items-center'>
                <h3 className={classes.guests}>Add guests</h3>
                <FontAwesomeIcon className={classes.magIcon} icon={faMagnifyingGlass} />
            </div>
        </div>
        <div className='flex items-center'>
            <div className='mr-5'>
                <h5 className={classes.anywhere}>Become a Host</h5>
            </div>
            <div className='mr-5'>
                <FontAwesomeIcon icon={faGlobe} />
            </div>
            <div className={`mr-5 flex items-center ${classes.leftIcons}`}>
                <FontAwesomeIcon className='mr-3' icon={faBars} />
                <FontAwesomeIcon className={`mr-1 ml-3 ${classes.personIcon}`} icon={faUser} />
            </div>
        </div>
    </div>
    </Link>
  )
}

export default Nav