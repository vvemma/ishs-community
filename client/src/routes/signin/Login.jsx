import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css"

function Login2(){
    
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


  return(
    <>
        <div className="login_box">
          <div className="login_container">
              <input
              placeholder="아이디"
              type="text"
              name="input_id"
              value={id}
              className="login_input_id"
              onChange={onChangeId}
            />
            <input
              placeholder="비밀번호"
              type="password"
              className="login_input_password"
              name="input_password"
              value={password}
              onChange={onChangePassword}
              onKeyDown={onKeyDownLogin}
            />
            <button type="submit" className="loginbtn" onClick={onclickLogin}>
              로그인
            </button>
            {loginfail ? <p></p> : <p className="login_message">{message}</p>}
          </div>

          <button
          onClick={() => {navigate("/findpw");}}
            style={{ width: 'auto' }}
            className="btnA"
          >
            아이디/비밀번호 찾기
          </button>
          <button
          onClick={() => {navigate("/register");}}
            style={{ width: 'auto' }}
            className="btnB"
          >
            회원가입
          </button>
        </div>

    </>

  );
}

export default Login2