import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Logged in Successfully", "success")
            history("/");
        }
        else{
            props.showAlert("Invalid Details", "danger")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className='mt-3'>
            <h2 className="my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >Login to continue to eNotebook</h2>
            <h7 className="my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >Don't have an account? Sign Up</h7>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3 my-3">
                    <label htmlFor="email" className="form-label" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>Email address</label>
                    <input type="email" className={`form-control bg-${props.mode}`} style={{color: props.mode === 'dark' ? 'white' : 'black'}} value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >Password</label>
                    <input type="password" className={`form-control bg-${props.mode}`} style={{color: props.mode === 'dark' ? 'white' : 'black'}} value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login