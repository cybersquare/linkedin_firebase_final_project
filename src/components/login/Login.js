import React from "react";
import styles from "./Login.module.css";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { login } from "../../app/UserSlice";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fire from "../../firebase";
import { Link } from "react-router-dom";

//Assets
import HeaderLogo from "../../assets/linkedin_header_logo.svg";
import FooterLogo from "../../assets/linkedin_footer_logo.svg";
import GoogleLogo from "../../assets/google_logo.svg";
import AppleLogo from "../../assets/apple_logo.svg";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

function Login() {
  const [email, setEmail] = useState("monish.mohan@gmail.com");
  const [password, setPassword] = useState("mypassword");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fire.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        navigate("/dashboard");
      }
    });
  }, []);

  return (
    <div className={styles.login}>
      {/* Helmet is used for changing the title */}
      <Helmet>
        <title>Linkedin login</title>
      </Helmet>
      {/* Content div */}
      <div className={styles.login__content}>
        <img
          src={HeaderLogo}
          alt="header logo"
          className={styles.login_header_logo}
        />
        <div className={styles.login__center_content}>
          <div className={styles.login__box_content}>
            <div className={styles.login__text_content}>
              <p className={styles.login__text_content__head}>Sign in </p>
              <p className={styles.login__text_content__head__description}>
                Stay updated on your professinal world
              </p>
            </div>

            <TextField
              className={styles.login__input}
              fullWidth
              label="Email or phone"
              type="text"
              sx={{
                marginBottom: "25px",
                marginTop: "30px",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              className={styles.login__input}
              fullWidth
              label="Password"
              type="password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <span className={styles.input__password_show}>show</span>
                  </InputAdornment>
                ),
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className={styles.login__forgot_password}>Forgot password?</p>

            <button
              type="submit"
              id="join-form-submit"
              className={styles.login__form__form_body_signin_button}
              value="Agree &amp; Join"
              onClick={() => {
                dispatch(login({ email: email, password: password }));
              }}
            >
              Sign in
            </button>

            <h2 className={styles.login__content__or_h2}>
              <span className={styles.login__content__or_span}>or</span>
            </h2>

            <div className={styles.login__login__google}>
              <img src={GoogleLogo} alt="google logo" />
              <span>Sign in with google</span>
            </div>

            <div className={styles.login__login__google}>
              <img src={AppleLogo} alt="apple logo" />
              <span>Sign in withApple</span>
            </div>
          </div>
          <p className={styles.login__new_to_help_link__text}>
            New to Linkedin?
            <a
              href="https://www.linkedin.com/help/linkedin/answer/710?
                    trk=registration-frontend_join-form-page-help-link"
              className={styles.login__page_newto_link__link}
              target="_blank"
              rel="noopener 
                    noreferrer"
              
            >
             <Link to="/signup" style={{textDecoration:'none'}}>Join Now</Link>
            </a>
          </p>
        </div>
      </div>{" "}
      {/* End of content */}
      {/* Footer */}
      <footer className={styles.login__li__footer}>
        <ul className={styles.login__li__footer_list}>
          <li className={styles.login__li__footer_list_logo}>
            <img src={FooterLogo} alt="footer logo" />
          </li>
          <li className={styles.login__li__footer_list_year}>@2023</li>
          <li className={styles.login__li__footer_list_text}>About</li>
          <li className={styles.login__li__footer_list_text}>Accssibility</li>
          <li className={styles.login__li__footer_list_text}>User Agreement</li>
          <li className={styles.login__li__footer_list_text}>Privacy Policy</li>
          <li className={styles.login__li__footer_list_text}>Cookie Policy</li>
          <li className={styles.login__li__footer_list_text}>
            Copyright policy
          </li>
          <li className={styles.login__li__footer_list_text}>Brand Policy</li>
          <li className={styles.login__li__footer_list_text}>Guest controls</li>
          <li className={styles.login__li__footer_list_text}>
            Community Guidelines
          </li>
          <li className={styles.login__li__footer_list_text}>
            <select>
              <option>Language</option>
              <option>English</option>
              <option>Hindi</option>
              <option>Arabic</option>
              <option>Malayalam</option>
            </select>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Login;
