import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from  "./Login.module.css";
import { InputControl } from "../inputControl/InputControl";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export function Login(){
  const navigate = useNavigate();
  const [values, setValues] = useState({
      email:"",
      pass:""
  });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const Loguearse = ()=>{
    if(!values.email || !values.pass){
      setErrorMsg("Datos incompletos");
      return;
    }
    setErrorMsg("");
      
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth,values.email, values.pass)
    .then( async (res) =>{
      setSubmitButtonDisabled(false);//todo sale bien
      navigate("/")
    })
    .catch((err)=>{
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
    });
  };

  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>Login</h1>
            <InputControl label="Email"
             placeholder="Ingrese su email" onChange={(event)=> setValues((prev) =>({...prev, email:event.target.value
              }))
            }/>
            <InputControl label="Contraseña"
              placeholder="Ingrese su contraseña" onChange={(event)=> setValues( (prev) =>({...prev, pass:event.target.value
              }))
            }/>

            <div className={styles.footer}>
              <b className={styles.error}>{errorMsg}</b>
              <button onClick={Loguearse}>Login</button>
              <p>Crear cuenta 
                <span> <Link to={"/signup"}>Registrarse
                </Link></span>
              </p>
            </div>
        <Link to={"/"}>Volver al home
        </Link>
        </div>
    </div>
  );
};