import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

import { useAppContext } from "../context/appContext";


const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser, setupUser} = useAppContext();

  //global state and useNavigate

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser={name,email,password}
    if(isMember){
      setupUser({currentUser, endPoint: "login", alertText: "Login Successful! Redirecting..."});
    }
    else{
      setupUser({currentUser, endPoint:"register", alertText: "User created! Redirecting..."});
    }
    // console.log(values);
  };

useEffect(()=>{
  if(user){
    setTimeout(()=>{navigate("/")}, 3000);
    

}},[user,navigate])



  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}

        {/* name input*/}
        {!values.isMember && (
          <FormRow
            handleChange={handleChange}
            value={values.name}
            name="name"
            type="text"
          />
        )}
        {/* email input*/}
        <FormRow
          handleChange={handleChange}
          value={values.email}
          name="email"
          type="email"
        />
        {/* password input*/}
        <FormRow
          handleChange={handleChange}
          value={values.password}
          name="password"
          type="password"
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
