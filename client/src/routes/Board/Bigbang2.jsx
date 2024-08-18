import React from "react"
import { Link, useNavigate } from "react-router-dom";
import "./Bigbang2.css";

function BigbangPage2(){
    
    return(
        <>
        <div className="bigbang_nav">
            <p className="bigbang_title">Bigbang</p>
            <p className="bigbang_message">인곽인의 창의력을 펼치다</p>
            <p className="bigbang_menu1">글 작성하기</p>
            <p className="bigbang_menu2">내가 작성한 글</p>
            <p className="bigbang_menu3">내가 쓴 댓글</p>
            <p className="bigbang_menu4">내가 추천한 글</p>
        </div>
        </>
    );
}

export default BigbangPage2