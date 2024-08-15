import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Main2.css";
import mypage from "../../assets/img/mypage.png";

import ISHSlogo from "../../assets/img/ishs-logo.jpg";

function Main2(){
    const navigate = useNavigate();

    const [islogin, setIslogin] = useState(false);

    useEffect(() => {
      (async () => {
        const formData = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          credentials: "include",
        };
        const res = await (await fetch(`/check_session`, formData)).json();
        console.log(res);
        if (res.status === 200) {
          setIslogin(true);
        }
      })();
    }, []);
    
    return(
        <>
        <div>
        {islogin ? (
          <button
          className="mypagebutton"
            onClick={() => {
              navigate("/mypage");
            }}
          >
            <img className="mypage" src={mypage} alt="mypage" />
          </button>
        ) : (
          <a className="loginbutton" href="/login">
            로그인하기
          </a>
        )}
      </div>

        <div className="main_title"> 
         <div>
          <img className="ISHSlogo" src={ISHSlogo} alt="ISHSlogo" />
        </div>
        <h1 className="log">log</h1>
        <h1 className="han_ishs">인곽</h1>
        <h1 className="eng_ishs">Incheon Science High School</h1>
        </div>

        <button className="main_btn btn1"  onClick={() => {navigate("/school");}}>학교 소개</button>
        <button className="main_btn btn2" onClick={() => {navigate("/bigbang");}}>빅뱅</button>
        <button className="main_btn btn3" onClick={()=>{navigate("/gallery");}}>인곽 갤러리</button>
        </>
    )
}

export default Main2;