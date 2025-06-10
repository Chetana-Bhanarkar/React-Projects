import React, { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setisRegister] = useState(false);
  const [isLogging, setisLogging] = useState(false);
  const [users, setUsers] = useState([]);

  const handleAuthentication = (e) => {
    e.preventDefault();
    if (isRegister) {
      if (isRegister) {
        const user = users.find((u) => u.email === email && u.password === password);
        console.log(user);

        if (user) {
          setisLogging(true);
        } else {
          alert("Login Failer, wrong credentials...")
        }
      }
    } else {
      const newUser = { email, password };
      setUsers([...users, newUser]);
      localStorage.setItem('users', JSON.stringify([...users, newUser]));
      setisLogging(true);
    }
  }

  const handleLogout = () => {
    setisLogging(false);
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      {
        isLogging ?
          (
            <div>
              <h2>
                Welcome, {email}
              </h2>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) :
          (
            <div>
              <h2>
                {
                  isRegister ? "Login" : "Register"
                }
              </h2>
              <form>
                <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} /> <br /><br />
                <input type="password" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} /> <br /><br />
                <button onClick={handleAuthentication}>
                  {
                    isRegister ? "Login" : "Register"
                  }
                </button>
                <p>
                  {
                    isRegister ? "Don't have an account ? Register now" : "Already have an account ? Login"
                  }
                </p>
                <button onClick={(e) => {
                  e.preventDefault();
                  setisRegister(!isRegister)
                }}>
                  {
                    isRegister ? "Register" : "Login"
                  }
                </button>
              </form>
            </div>

          )
      }

    </div>
  )
}
