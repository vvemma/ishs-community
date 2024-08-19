import React, {createRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from '../BigbangPage.module.css';

const BSidebar = ({checked}) => {

    let ref = createRef();
    
    useEffect(() => {
        if (checked) {
            ref.current.style.transform = 'translateX(-100%)';
            ref.current.style.transition = 'transform 0.3s ease-in-out';
        } else {
            ref.current.style.transform = 'translateX(0)';
            ref.current.style.transition = 'transform 0.3s ease-in-out';
        }
    }, [checked]);

    return (
        <nav ref={ref} className={styles.sidebar}>
            {/* exit button */}
            <label htmlFor="menuicon">
                <div className={styles.exit}>X</div>
            </label>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li className={styles.sidebtn}><Link to="/Write" state={{type: 'w'}}>글 작성하기</Link></li>
                <li className={styles.sidebtn}><Link to="/mypage">내가 쓴 글</Link></li>
                <li className={styles.sidebtn}><Link to="/mypage">내가 쓴 댓글</Link></li>
                <li className={styles.sidebtn}><Link to="/mypage">내가 추천한 글</Link></li>
            </ul>
        </nav>
    );
}

export default BSidebar;