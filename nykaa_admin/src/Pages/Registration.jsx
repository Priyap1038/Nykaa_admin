import React, { useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { register } from "../Redux/authentication/action";
import { useDispatch } from "react-redux";


const Registration = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userData, setuserData] = useState({
      name: "",
      email: "",
      password: "",
    });
    const [error, setError] = useState(null);
  
    const changeInputHandler = (e) => {
      setuserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleRegister = (e) => {
      e.preventDefault();
      const payload = {
        ...userData,
      };
      dispatch(register(payload))
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
      <section className="register">
        <div className="container">
          <h2>Sign Up</h2>
          <form className="form register_form">
            {error && <p className="form_error-message">{error}</p>}
  
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={userData.name}
              onChange={changeInputHandler}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={changeInputHandler}
            />
            <input
              type="Password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={changeInputHandler}
            />
            <button
              className="btn primary"
              type="submit"
              onClick={handleRegister}
            >
              {" "}
              Register
            </button>
          </form>
          <small>
            Already have an account ? <Link to="/login">Login</Link>
          </small>
        </div>
      </section>
  )
}

export default Registration