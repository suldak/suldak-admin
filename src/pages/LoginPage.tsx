import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useAtom } from 'jotai';

// components
import Input from '@components/core/Input';
import Button from '@components/core/Button';

// atoms
import { userAtom } from '@atoms/userAtoms';

// hooks
import useInput from '@hooks/useInput';
import useToastify from '@hooks/useToastify';

// apis
import AuthApi from '@apis/services/AuthApi';

/** 로그인 페이지 */
const LoginPage = () => {
  const navigate = useNavigate();
  const { showSuccessToastMessage, showWarningToastMessage, showErrorToastMessage } = useToastify();
  const [, setUser] = useAtom(userAtom);

  const userID = useInput('');
  const userPW = useInput('');

  // 로그인 mutation
  const mutation = useMutation(AuthApi.login, {
    // 로그인 성공시 수행될 코드
    onSuccess: (response) => {
      setUser(response[0].data);
      navigate('/');
      showSuccessToastMessage(`${response[0].data.adminNm}님 안녕하세요.`);
    },
    onError: (error) => {
      console.log(error);
      showErrorToastMessage('로그인을 실패했습니다.');
    },
  });

  // 로그인 함수
  const handleLogin = () => {
    if (userID.value === '' || userPW.value === '') {
      showWarningToastMessage('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    const reqData = {
      adminId: userID.value,
      adminPw: userPW.value,
    };

    mutation.mutate(reqData);
  };

  return (
    <Container>
      <div className="content-wrap">
        <div className="title">
          <h1>로그인</h1>
        </div>
        <div className="input-wrap">
          <Input label="아이디" placeholder="ID" value={userID.value} onChange={userID.onChange} />
          <Input
            label="비밀번호"
            placeholder="Password"
            value={userPW.value}
            onChange={userPW.onChange}
            onEnterKeyDown={handleLogin}
            type="password"
          />
        </div>
        <Button onClick={handleLogin} width="100%">
          로그인
        </Button>
      </div>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    width: 100%;
    color: ${(props) => props.theme.text.primary};
  }

  .content-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    width: 400px;
    background-color: ${(props) => props.theme.componentBgColor};
    box-shadow: ${(props) => props.theme.boxShadow};
    padding: 1rem;
    border-radius: 0.25rem;
  }

  .input-wrap {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;
