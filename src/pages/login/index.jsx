import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AdminContext } from "../../context";
import Styles from "./Login.module.css"
import img from "../../assets/images/bags.jpg"
const LoginPage = () => {
  const {
    state: { auth },
    dispatch,
  } = useContext(AdminContext);
  const navigate = useNavigate();
  const [params] = useSearchParams();

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch({ type: 'signin', payload: {} })
  //   }, 1000);
  //   return () => {
  //   }
  // }, [])

  useEffect(() => {
    if (!!auth.authed) {
      try {
        navigate(params.get("current") || "/");
      } catch (error) {
        console.log(error);
      }
    }
    return () => {};
  }, [auth.authed]);

  const submitLogin = () => {
    dispatch({ type: "signin", payload: {} });
  };
  return !!auth.authed ? (
    <>Redirect to dashboard</>
  ) : (
    <>
    <div className={Styles.home}>
    <div className={Styles.wrapper}>
        <div className={Styles.formBox}>
          <h2>Login</h2>
          <form action="#">
            <div className={Styles.inputBox}>
              <span className={Styles.icon}>
              <i className="fa-regular fa-envelope"></i>
              </span>
              <input type="email" required />
              <label htmlFor>Email</label>
            </div>
            <div className={Styles.inputBox}>
              <span className={Styles.icon}>
              <i className="fa-solid fa-lock"></i>
              </span>
              <input type="password" required />
              <label htmlFor>Password</label>
            </div>
            <button className={Styles.btn} style={{backgroundColor: '#e2e4ff'}} onClick={submitLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>



    </>
  );
};

export default LoginPage;
