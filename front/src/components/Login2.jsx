import { useEffect, useRef, useState } from "react"
import userServices from "../services/userServices";


const Login2 = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        userRef.current.focus();
    }, [])
    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const setLogin = {
            email: email,
            password: password
        }
        userServices.getLogIn(setLogin)
        setEmail('');
        setPassword('');
        setSuccess(true);

userServices.getLogIn()
    }
    return (
        <>
        {success ? (
            <section>
                <h1>You are logged in!</h1>
                <br />
                <p>
                    <a href="#">Go to Home Page</a>
                </p>
            </section>
        ) : (
        
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} >{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    required
                />
                <button>Sign In</button>
            </form>
            <p>
                Need an Account?<br />
                <span className="line">
                    {/* {router link*/}
                    <a href="">Sign Up</a>
                    </span>
            </p>
        </section>
        )}
        </>
    )
}

export default Login2