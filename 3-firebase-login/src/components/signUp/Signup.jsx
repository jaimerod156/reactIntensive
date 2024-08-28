import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { InputControl } from "../inputControl/InputControl";

export function Signup(){
  const navigate = useNavigate();//navegacion entre pagina por codigo, no por un click
  const [values, setValues] = useState(
    {
      name:"",
      email:"",
      pass:""
    });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const registro = () =>{
    if(!values.name || !values.email || !values.pass){
      setErrorMsg("Completar todos los campos");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisables(true);
    createUserWithEmailAndPassword(auth,values.email, values.pass)
    .then( async (res) =>{
      setSubmitButtonDisabled(false);
      const user = res.user;
      await updateProfile(user, {displayName:values.name,});
      navigate("/")
    })
    .catch((err)=>{
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
    })
  }

  return (
  <div className={styles.container}>
    <div className={styles.innerBox}>
    <h1 className={styles.heading}>Registro</h1>
      <InputControl />
    </div>
      <Link to={"/"}>Volver al home
      </Link>
  </div>
  );
};