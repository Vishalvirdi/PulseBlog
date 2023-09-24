import React from 'react'
const RegisterPage = () => {



    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
 
    async function register(e) {
        e.preventDefault();
        const response = await  fetch('http://localhost:4000/register', {
            method : 'POST',
            body : JSON.stringify({username,password}),
            headers :{'Content-Type' : 'application/json'}
        })
        setUsername("");
        setPassword("");

        if(response.status === 200){
          alert("registration successful");
        }else{
          alert('registration failed')
        }
     }
 


  return (
    <form onSubmit={register} action="" className="max-width-[400px]">
      <h1 className="text-center font-bold text-3xl my-10">Register</h1>
      <input
        type="text"
        value={username}
        onChange={e=> setUsername(e.target.value)}
        className="bg-[#fff] w-full p-2 block mb-5 border-[#ddd] border-2 rounded-lg"
        placeholder="username"
      />
      <input
        type="password"
        value={password}
        onChange={e=> setPassword(e.target.value)}
        className="bg-[#fff] w-full p-2 block mb-5 border-[#ddd] border-2 rounded-lg"
        placeholder="password"
      />
      <button className="w-full block bg-[#555] text-[#fff] rounded-lg py-2">
        Register
      </button>
    </form>
  )
}

export default RegisterPage