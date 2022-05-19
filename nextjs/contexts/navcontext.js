import React, {useState, createContext} from "react";
import axios from "axios"

export const NavContext = createContext({
    ads:[],
    addIcons:()=>{},
    setIconOnTrue:false,
    adsLoading:false,
    getTheAds:()=>{}
})

function NavContextProvider({children}){
    const [navIcons, setNavIcons] = useState([])
    const [adsCtx, setAdsCtx] = useState([])
    const [adsActiveCtx, setAdsActiveCtx] = useState(false)
    const [loading, setLoading] = useState(false)

    const addIcons = () =>{
        setNavIcons(navIcons)
    }

    const getTheAds = (props) =>{
        setLoading(true)
        setTimeout(()=>{
            axios.get(`http://localhost:5000/api/v1/ad/bycategory/${props}`)
            .then(res=>{
                setAdsCtx(res.data.data)
                setAdsActiveCtx(true)
                setLoading(false)
            })
            .catch(err=>{
                console.log(err)
            })
        },500)

    }

    const value = {
        ads:adsCtx,
        addIcons:addIcons,
        getTheAds:getTheAds,
        setIconOnTrue:adsActiveCtx,
        adsLoading:loading
    };

    return <NavContext.Provider value={value}>{children}</NavContext.Provider>
};

export default NavContextProvider;