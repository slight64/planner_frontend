import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../Input/Input';
import { login } from '../../reducers/features/user/userReducer';
import './login.scss';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login">
      <div className="login__header">Вход</div>

      <Input
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="email"
      />
      <Input
        value={password}
        setValue={setPassword}
        type="text"
        placeholder="Пароль"
      />
      <button
        onClick={() => {
          dispatch(login({ email, password }));
        }}
      >
        Войти
      </button>
    </div>
  );
};

export default Login;
