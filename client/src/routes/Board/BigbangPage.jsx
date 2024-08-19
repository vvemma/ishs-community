import { useNavigate } from "react-router-dom";
import styles from './BigbangPage.module.css';
import { useEffect, useState } from "react";
import BNavbar from "./components/BigbangNavbar";
import BSidebar from "./components/BigbangSidebar";

const TestBoardList = ({boardList}) => {

    return (
        <div>
            <div className={styles.boardlist}>
                {boardList.sort((a, b) => {return new Date(b.createdAt) - new Date(a.createdAt);}).map((board) => (
                    <BoardComponent uid={board.uid} title={board.title} views={board.view} recommends={board.like} comments={board.comments} writer={board.author} thumbnail={"https://via.placeholder.com/150"} />
                ))}
            </div>
        </div>
    );
}

const BoardComponent = ({uid, title, views, recommends, comments, writer, thumbnail}) => {

    const navigate = useNavigate();

    const onClickBoard = (uid) => {
        console.log(uid);
        navigate(`/board/detail`, { state: uid });
    };

    return (
        <div className={styles.board}>
            <div className={styles.boardelement} onClick={() => {onClickBoard(uid)}}>
                <div className={styles.title}>{title}</div>
                <div className={styles.countContainer}>
                    <div className={styles.views}>조회 {views}</div>
                    <div className={styles.recommends}>
                        <img width="15" height="15" src="https://img.icons8.com/ios/50/737373/hearts--v1.png" alt="hearts--v1"/>
                        {recommends}
                    </div>
                    <div className={styles.comments}>
                        <img width="15" height="15" src="https://img.icons8.com/ios/50/737373/speech-bubble-with-dots--v1.png" alt="speech-bubble-with-dots--v1"/>
                        &nbsp;{comments}
                    </div>
                </div>
                <div className={styles.writer}>{writer}</div>
            </div>
            <div className={styles.thumbnail}>
                <img src={thumbnail} alt="thumbnail" />
            </div>
        </div>
    );
}



const BigbangPage = () => {

    let [checked, setChecked] = useState(false);
    const [boardList, setBoardList] = useState([]);

    const getBoardList = async (start, end) => {
        const resp = await fetch(`/post/list?start=${start}&end=${end}`);
        let json = await resp.json();
        console.log(json.content);
        setBoardList(json.content);
      };

    useEffect(() => {
        getBoardList(0, 10000);
    }, []);

    return (
        <div className={styles.scroll}>
            <BNavbar checked={checked} setChecked={setChecked} setBoardList={setBoardList}/>
            <BSidebar checked={checked}/>
            <TestBoardList boardList={boardList}/>
        </div>
    );
}

export default BigbangPage;