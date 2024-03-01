import React from 'react';
import Route from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    (async () => {
      const formData = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
      };
      const res = await fetch(`/check_session`, formData);

      console.log(res.status);
      console.log(res);
    })();
  }, []);

  const navigate = useNavigate();

  const onClickSignOut = async () => {
    console.log('signin');
    const formData = {
      mgitethod: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const resl = await fetch(`serverUrl` + `/signout`, formData);
  };

  return (
    <button type='button' onClick={onClickSignOut}>
      로그아웃
    </button>
  );
}

export default Home;
