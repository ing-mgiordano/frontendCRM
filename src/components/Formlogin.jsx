import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Formlogin = () => {

    const navigate = useNavigate('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginSubmit = e => {
        e.preventDefault()

        email === "usuario@solera.com" && password === "bootcamp4" ? navigate('/home') : alert("User or Password incorrect")

    }

  return (
    <>
        <form
            className="login"
            onSubmit={loginSubmit}
        >
        <div className="wraper">
            <div>
                <label htmlFor="email">
                    User Name
                </label>
                <input
                    className="input"
                    type="email" 
                    id='email'
                    placeholder='Email'
                    value={email}
                    onChange={ e => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="password">
                    Password
                </label>
                <input
                    className="input"
                    type="password" 
                    id='password'
                    placeholder='Password'
                    value={password}
                    onChange={ e => setPassword(e.target.value)}
                />
            </div>
            <div
                className="button-login-container"
            >
                <input
                    className="button"
                    type="submit"
                    value="Login"
                />
            </div>
        </div>


        </form>
    </>
  )
}

export default Formlogin