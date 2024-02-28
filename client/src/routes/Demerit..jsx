import React, {useEffect,useState} from 'react';
import './Demerit.module.css';

const DemeritBox = () => {
  const [postList, setPostList] = useState([]);
  const [sResult, setsResult] = useState([]);
  const [content, setContent] = useState("");
  
  const getPostList = async (start, end) => {
    const resp = await fetch(`http://app.ishs.co.kr/post/list?start=${start}&end=${end}`)
    let json = await resp.json()
    console.log(json.content)
    setPostList(json.content);
  }

  const search = (keyword, start, end) => {
    fetch(`http://app.ishs.co.kr/post/search?keyword=${keyword}&start=${start}&end=${end}`).then(res => {
      res.json().then(data => {
        setsResult(data.content)
        console.log(data.content)
      })
    })
}

  useEffect( () => {
    getPostList(0, 20);
  }, [] );

  let [count, setCount] = useState(1);
 
 
 
  return (
    <>
    
    <div>
      <div className='lists'>

        <ul className='PostList'>
          
          <div className='PostA'>
            <div className='post1'>벌점사항</div>
            <div className='post2'>날짜</div>
            <div className='post3'>벌점</div>
          </div>


        {postList.map((board) => (
          <div className='Post'>
            <div className='post1'> <li> {board.title} </li></div>
            <div className='post2'> <li> {board.like} </li></div>
            <div className='post3'> <li> {board.view} </li></div>
          </div>

        ))}

        
        {sResult.map((result) => (
          <li>{result.title}</li>
        ))}
        </ul>
      </div>

    </div>
    
    </>
    
  );


};

function DemeritList() {
  return (
    <div>
      <DemeritBox />
    </div>
  );
}

export default DemeritList;

