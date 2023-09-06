import React, { useState } from "react";
const host = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp";

const Home = () => {

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    // let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // API Call
        const response = await fetch(`${host}`, {
            method: "POST",
            setHeaders: {    
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({
                login_id: credentials.email,
                password: credentials.password,
            }),
        });
        const json = await response.json();
        console.log(json);
        // if (json.success) {
        //     localStorage.setItem("authToken1", json.authToken);
        //     // navigate("/");
        // } else {
        //     console.log("error");
        // }
    };
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className='container my-3'>
            <h2 className="App m-4">Login to continue</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4" style={{ width: "50%", margin: "auto" }}>
                    <label className="form-label" htmlFor="form2Example1">User ID</label>
                    <input name="email"
                    onChange={onChange}
                        id="email"
                        value={credentials.email}
                        aria-describedby="emailHelp" type="email" placeholder='User ID' className="form-control" />
                </div>
                <div className="form-outline mb-4" style={{ width: "50%", margin: "auto" }}>
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                    <input onChange={onChange} name="password" type="password" value={credentials.password} placeholder='Password' id="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4">Log in</button>
            </form>
        </div>
    )
}

export default Home
