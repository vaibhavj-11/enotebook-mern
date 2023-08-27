import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""})
    let history = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name, email, password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            history("/");
            props.showAlert("Account Created Successfully", "success")
        }
        else{
            props.showAlert("Invalid Credentials", "danger")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className="container mt-3">
            <h2 className="my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >Create an account to use eNotebook</h2>
            <h7 className="my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >Already have an account? Login</h7>
            <form onSubmit={handleSubmit}>
            <div className="mb-3 my-3">
                    <label htmlFor="name" className="form-label" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >Name</label>
                    <input type="text" className={`form-control bg-${props.mode}`} style={{color: props.mode === 'dark' ? 'white' : 'black'}} id="name" name="name" onChange={onChange} aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >Email address</label>
                    <input type="email" className={`form-control bg-${props.mode}`} style={{color: props.mode === 'dark' ? 'white' : 'black'}} id="email" name="email" onChange={onChange} aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >Password</label>
                    <input type="password" className={`form-control bg-${props.mode}`} style={{color: props.mode === 'dark' ? 'white' : 'black'}} id="password" name="password" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >Confirm Password</label>
                    <input type="password" className={`form-control bg-${props.mode}`} style={{color: props.mode === 'dark' ? 'white' : 'black'}} id="cpassword" name="cpassword" onChange={onChange} minLength={5} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
