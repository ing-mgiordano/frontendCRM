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
            onSubmit={loginSubmit}
        >
            <div>
                <label htmlFor="email">
                    User Name
                </label>
                <input 
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
                    type="password" 
                    id='password'
                    placeholder='Password'
                    value={password}
                    onChange={ e => setPassword(e.target.value)}
                />
            </div>

            <input
                type="submit"
                value="Login"
            />

        </form>
    </>
  )
}

export default Formlogin