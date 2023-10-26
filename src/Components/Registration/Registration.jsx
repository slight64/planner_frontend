import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../Input/Input';
import { registration } from '../../reducers/features/user/userReducer';
import './registration.scss';

const Registration = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="registration">
      <div className="registration__header">Регистрация</div>

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
          dispatch(registration({ email, password }));
        }}
      >
        Регистрация
      </button>
    </div>
  );
};

export default Registration;
