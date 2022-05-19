import React, {useEffect, useState, useContext, useRef} from 'react'
import classes from "./MainPageIcon.module.css"
import { useRouter } from 'next/router'
import { NavContext } from "../../contexts/navcontext"

function MainPageIcon(props) {
    const router = useRouter()
    const [active, setActive] = useState(false)
    const navCtx = useContext(NavContext)

    useEffect(()=>{
        if(router.query.name=== props.slug){
            setActive(true)
        }else{
            setActive(false)
        }
    }, [router.query])

  return (
    <div onClick={(e)=>{
        router.push(`/?name=${props.slug}`)
        navCtx.getTheAds(props.id)
    }} className='m-10'>
        <div className='grid justify-center'>
            <img className={active === true ? classes.image : classes.imageBefore} src={props.icon}></img>
        </div>
        <div>
        <h5 className={active === true ? "border-b-2 border-black opacity-100 text-small text-sm": "text-black text-sm"}>{props.name}</h5>
        </div>
    
    </div>
  )
}

export default MainPageIcon