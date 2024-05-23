import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./main.module.css";

import Block from "../../component/main/Block";

import ISHSlogo from "../../assets/img/ishs-logo.jpg";
import mypage from "../../assets/img/mypage.png";
import school from "../../assets/img/school.png";
import bigbang from "../../assets/img/bigbang.png";
import logISHS from "../../assets/img/logISHS.png";
import gallery from "../../assets/img/gallery.png";

function Main() {
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

  return (
    <div>
      <div className={styles.title1}>
        <div>
          <img className={styles.ISHSlogo} src={ISHSlogo} alt="ISHSlogo" />
        </div>
        <div>
          <img src={logISHS} alt="ISHSlogo" />
        </div>
      </div>

      <div>
        {islogin ? (
          <button
            className={styles.mypagebutton}
            onClick={() => {
              navigate("/mypage");
            }}
          >
            <img className={styles.mypage} src={mypage} alt="mypage" />
          </button>
        ) : (
          <a className={styles.loginbutton} href="/login">
            로그인하기
          </a>
        )}
      </div>
      <div className={styles.title2}>
        <Block img={school} title={"학교소개"} link={"school"} />
        <Block img={bigbang} title={"빅뱅"} link={"bigbang"} />
        <Block img={gallery} title={"인곽갤러리"} link={"gallery"} />
      </div>
    </div>
  );
}

export default Main;
