import React,{useState} from 'react'
import logo from "./images/netflix-logo.jpeg";
import emoji from "./images/green-blue-emoji.jpeg";
import './navbar.css'

function NavBar() {
  const [isDark,setDark] = useState(false)
  
    

    window.onscroll = () =>{
      // if(window.scrollY > 150){
        //     setIsDark(true)
        // }
        // else    setIsDark(false)
        setDark(window.scrollY >100? true:false);
    };
  
 

  return (


    <header className={isDark ? "dark" :""}>
      <div className="left">
       <img src={logo}></img>
      </div>
      <div className="right">
       <img src={emoji}></img>
      </div>
    </header>
  )
}

export default NavBar