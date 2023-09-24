import {React,useState,useContext} from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../components/UserContext";

const LoginPage = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <form action="" onSubmit={login} className="max-width-[400px]">
    <h1 className="text-center font-bold text-3xl my-10">Log In</h1>
    <input
      type="text"
      value={username}
      onChange={e=> setUsername(e.target.value)}
      placeholder="username"
    />
    <input
      type="password"
      value={password}
      onChange={e=> setPassword(e.target.value)}
      placeholder="password"
    />
    <button className="">
      Login
    </button>
  </form>
  )
};

export default LoginPage;
