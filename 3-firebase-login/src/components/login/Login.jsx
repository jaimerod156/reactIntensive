import { Link } from "react-router-dom";
import styles from  "./Login.module.css";

export function Login(){
  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>Login</h1>
            <div className={styles.footer}>
              <b className={styles.error}>error</b>
              <button>Login btn</button>
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