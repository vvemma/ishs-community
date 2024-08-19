import { useNavigate } from 'react-router-dom';

function SignupSuccess() {
  const navigate = useNavigate();

  const onClickSignup = () => {
    navigate('/login');
  };
  return (
    <>
        <div className="register_box">
            <div className="register_container"> 
            <h2>회원가입이 완료되었습니다</h2>
            <button onClick={onClickSignup} className='register_btn'>로그인 하러 가기</button>
            </div>
    </div>
    </>
  );
}

export default SignupSuccess;
