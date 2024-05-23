import logISHS from "../../assets/img/logISHS.png";
import ISHSlogo from "../../assets/img/ishs-logo.jpg";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./signin.module.css";

function Login() {
  const navigate = useNavigate();

  const [loginfail, setLoginfail] = useState(false);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onKeyDownLogin = (e) => {
    if (e.key === "Enter") {
      console.log("enter");
      onclickLogin();
    }
  };

  const onClicklogo = () => {
    navigate("/");
  };

  const onclickLogin = async () => {
    const formData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      credentials: "include",
      body: JSON.stringify({
        id: id,
        password: password,
      }),
    };

    const resl = await fetch(`/signin`, formData);
    console.log(resl);

    const status = resl.status;

    if (status === 200) {
      navigate("/");
    }
    if (status === 400) {
      setMessage("아이디 또는 비밀번호가 일치하지 않습니다.");
      setLoginfail(true);
    }
    if (status === 500) {
      navigate("/developer/special");
    }
  };

  return (
    <div>
      <div onClick={onClicklogo} className={styles.logo}>
        <div>
          <img src={ISHSlogo} className={styles.ISHSlogo} alt="ISHSlogo" />
        </div>
        <div>
          <img src={logISHS} alt="ISHSlogo" />
        </div>
      </div>

      <div>
        <input
          placeholder="아이디"
          type="text"
          name="input_id"
          value={id}
          onChange={onChangeId}
          className={styles.login}
        />
        <input
          placeholder="비밀번호"
          type="password"
          name="input_password"
          value={password}
          onChange={onChangePassword}
          className={styles.password}
          onKeyDown={onKeyDownLogin}
        />
      </div>

      <div>
        <button className={styles.loginbutton} onClick={onclickLogin}>
          로그인
        </button>
        {loginfail ? <p></p> : <p className={styles.message}>{message}</p>}
      </div>

      <div>
        <a href="/findpw" className={styles.findidpw}>
          아이디/비밀번호 찾기
        </a>
        <p className={styles.middle}>|</p>
        <a href="/register" className={styles.signup}>
          회원가입
        </a>
      </div>
    </div>
  );
}

export default Login;
