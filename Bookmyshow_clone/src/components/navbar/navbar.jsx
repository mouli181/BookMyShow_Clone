import React, {useState, useEffect} from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenu } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import bookmyshowLogo from "../../assests/bookmyshow-logo.png";
import "./navbr.scss";
import { Link } from "react-router-dom";
import SignIn from "../signIn/signIn";
import LogIn from "../LogIn/LogIn";
import axios from 'axios'
import { useCookies } from 'react-cookie'

const Navbar = () => {
  const [cookies, _, removeCookie] = useCookies(['token'])
  const [loginSuccess, setLoginSuccess] = useState('')

  useEffect(() => {
    getUserDetails()
  }, [])

  const getUserDetails = async() => {
    if(cookies.token!=undefined) {
      try {
        let response = await axios.get('http://localhost:8080/user/getUserName/'+cookies.token);
        if(response.status==200){
          setLoginSuccess(response.data);
          console.log(loginSuccess)
        }
      } catch (e) {
        console.log(e)
        setLoginSuccess('')
      }
    }else {
      setLoginSuccess('')
    }
  }
  return (
    <div id="navbar">
      <header>
        <div className="left">
          <a href="#">
            <img src={bookmyshowLogo} alt="" />
          </a>
          <div className="search">
            <CiSearch className="icon" />
            <input
              type="text"
              placeholder="Search for movies,events,plays,sports and activities"
            />
          </div>
        </div>
        <div className="right">
          <div className="location">
            <span>Coimbatore</span>
            <RiArrowDropDownLine className="arrow"  />
          </div>
          {/* <button>Sign in</button> */}
          {loginSuccess === '' ? (
              <>
                <SignIn />
                <LogIn />
              </>
            ) : (
              <>
                <span>{loginSuccess}</span>
                <button type="button" onClick={() => {removeCookie('token'); getUserDetails();}}>Log Out</button>
              </>
            )}
           
          <HiOutlineMenu className="menu" />
        </div>
      </header>
      
      <nav>
        <div className="first">
          <span>Movies</span>
          <span>Stream</span>
          <span>Events</span>
          <span>Plays</span>
          <span>Sports</span>
          <span>Activities</span>
        </div>

        <div className="last">
          <span>ListYourShow</span>
          <span>Corporates</span>
          <span>Offers</span>
          <span>Gift Cards</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

