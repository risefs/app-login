import React, {useState} from 'react';

import Title from './components/title/Title';
import Input from './components/input/Input';
import Label from './components/label/Label';
import InputError from '../../commons/errors/inputs/InputError';
import '../../pages/login/Login.css'


const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [hasError, setHastError] = useState(false);

    function handleChange(name,value){
        if(name === 'user') setUser(value);
        if(name === 'password'){

            if(value.length > 0 && value.length < 6 ){
                setPasswordError(true);
            }else{
                setPasswordError(false);
                setPassword(value);
            }
        }
    };
    
    function handleSubmit(){
        let account = {user,password}
        if(account) ifMatch(account);
    }

    function ifMatch(param){
        if (param.user.length > 0 && param.password.length > 0) {
          if ((param.user === "risefs" && param.password === "123456") || param.user === "frentona02@gmail.com" && param.password === "19650607" ) {
            const { user, password } = param;
            let account = { user, password },
              accountOk = JSON.stringify(account);
            localStorage.setItem("account", accountOk);
            setIsLogin(true);
          }else{
            setIsLogin(false);
            setHastError(true);
          }
        }else{
            setIsLogin(false);
            setHastError(true);
        }  
    }

return (
  <div>
    {
        isLogin ? 
        <>
            <h1>Hola , {user}</h1>
            <label>Usted esta logueado</label>
        </>
        :
        <div className="login-container">
      <Title text="¡Welcome!" />
      {hasError ? (
        <label className="label-alert">This account no exists</label>
      ) : null}
      <Label text="User" />
      <Input
        attribute={{
          id: "user",
          name: "user",
          placeholder: "Enter your user",
          type: "text",
        }}
        handleChange={handleChange}
      />
      <Label text="Password" />
      <Input
        attribute={{
          id: "password",
          name: "password",
          placeholder: "Enter your password",
          type: "password",
        }}
        handleChange={handleChange}
        param={passwordError}
      />
      {passwordError ? (
        <InputError text={"Password cannot be less than 6 characters "} />
      ) : null}
      <button onClick={handleSubmit} className="button-login">
        Login
      </button>
    </div>
    }
  </div>
);
}

export default Login;