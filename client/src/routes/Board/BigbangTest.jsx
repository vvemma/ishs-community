import { Link } from "react-router-dom";
import styles from './BigbangTest.module.css';
import { createRef, useEffect, useState } from "react";

const Navbar = ({checked, setChecked}) => {

    const onChecked = (e) => {
        setChecked(e.target.checked);
        console.log(e.target.checked);
    }

    let ref1 = createRef();
    let ref2 = createRef();
    let ref3 = createRef();

    useEffect(() => {
        if (checked) {
            ref1.current.style.display = 'none';
            ref2.current.style.display = 'none';
            ref3.current.style.display = 'none';
        } else {
            ref1.current.style.display = 'block';
            ref2.current.style.display = 'block';
            ref3.current.style.display = 'block';
        }
    }, [checked]);

    return (
        <div>
            <nav className={styles.navbar}>
                <ul className={styles.logo}>
                    <div>BigBang</div>
                </ul>
                <ul>
                    <div className={styles.search}>
                        <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill="##s7792c1" d="M14 12.94 10.16 9.1c1.25-1.76 1.1-4.2-.48-5.78a4.49 4.49 0 0 0-6.36 0 4.49 4.49 0 0 0 0 6.36 4.486 4.486 0 0 0 5.78.48L12.94 14 14 12.94ZM4.38 8.62a3 3 0 0 1 0-4.24 3 3 0 0 1 4.24 0 3 3 0 0 1 0 4.24 3 3 0 0 1-4.24 0Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
                        <input type="text" placeholder="Search..." />
                    </div>
                </ul>
                <ul className={styles.menu}>
                    <input type="checkbox" id="menuicon" className={styles.menuicon} onChange={onChecked}/>
                    <label htmlFor="menuicon" className={styles.menubar}>
                        <div ref={ref1} className={styles.bar}></div>
                        <div ref={ref2} className={styles.bar}></div>
                        <div ref={ref3} className={styles.bar}></div>
                    </label>
                </ul>
            </nav>
        </div>
    );
}

const Sidebar = ({checked}) => {

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
                <li className={styles.sidebtn}><Link to="/write">글 작성하기</Link></li>
                <li className={styles.sidebtn}><Link to="/mypage">내가 쓴 글</Link></li>
                <li className={styles.sidebtn}><Link to="/mypage">내가 쓴 댓글</Link></li>
                <li className={styles.sidebtn}><Link to="/mypage">내가 추천한 글</Link></li>
            </ul>
        </nav>
    );
}

const BigbangPage = () => {

    let [checked, setChecked] = useState(false);

    return (
        <div>
            <Navbar checked={checked} setChecked={setChecked}/>
            <Sidebar checked={checked}/>
        </div>
    );
}

export default BigbangPage;