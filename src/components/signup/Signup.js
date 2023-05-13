import React, { useEffect, useState } from "react";
import styles from "./Signup.module.css";
import { Helmet } from "react-helmet";

//Assets
import HeaderLogo from "../../assets/linkedin_header_logo.svg";
import FooterLogo from "../../assets/linkedin_footer_logo.svg";
import GoogleLogo from "../../assets/google_logo.svg";

import { useDispatch } from "react-redux";
import fire from "../../firebase";
import { signup } from "../../app/UserSlice";
import { useNavigate } from "react-router-dom";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fire.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        navigate("/dashboard");
      }
    });
  }, []);

  return (
    <div className={styles.signup}>
      {/* Helmet is used for changing the title */}
      <Helmet>
        <title>Linkedin signup</title>
      </Helmet>
      {/* Content div */}
      <div className={styles.signup__content}>
        <img
          src={HeaderLogo}
          alt="header logo"
          className={styles.signup_header_logo}
        />
        <div className={styles.signup__center_content}>
          <div className={styles.signup__text_content}>
            {" "}
            Make the most of your professional life
          </div>
          <div className={styles.signup__box_content}>


          <label className={styles.input__label} forhtml="user-name">
              Name
            </label>
            <input
              className={styles.input__input}
              required
              id="user-name"
              type="text"
              name="user-name"
              value={email}
              onChange={() => {}}
            />




            <label className={styles.input__label} forhtml="email-or-phone">
              Email or phone number
            </label>
            <input
              className={styles.input__input}
              required
              id="email-or-phone"
              type="text"
              name="email-or-phone"
              value={email}
              onChange={() => {}}
            />

            <label className={styles.input__label} forhtml="password">
              Password (6 or more characters)
            </label>

            <input
              className={styles.input__input}
              autoComplete="new-password"
              required
              id="password"
              type="password"
              name="password"
              placeholder=""
              value={password}
              onChange={() => {}}
            />

            <span className={styles.signup__agreement_span}>
              By clicking Agree &amp; Join, you agree to the LinkedIn{" "}
              <a
                target="_blank"
                rel="noopener 
                        noreferrer"
                href="https://www.linkedin.com/legal/user-agreement?
                        trk=registration-frontend_join-form-user-agreement"
              >
                User Agreement
              </a>
              ,
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.
                        com/legal/privacy-policy?trk=registration-frontend_join-form-privacy-policy"
              >
                Privacy Policy
              </a>
              , and{" "}
              <a
                href="https://www.linkedin.com/legal/cookie-policy?
                         trk=registration-frontend_join-form-cookie-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cookie Policy
              </a>
              .{" "}
            </span>

            <button
              type="submit"
              id="join-form-submit"
              className={styles.form__form_body_submit_button}
              value="Agree &amp; Join"
              onClick={() => {
                dispatch(signup({}));
              }}
            >
              Agree &amp; Join
            </button>

            <h2 className={styles.content__or_h2}>
              <span className={styles.content__or_span}>or</span>
            </h2>

            <div className={styles.continue__google}>
              <img src={GoogleLogo} alt="google logo" />
              <span>Continue with google</span>
            </div>

            <div className={styles.main__sign_in_container}>
              Already on LinkedIn?&nbsp;
              <a
                href="https://www.linkedin.com/uas/login?"
                className={styles.main__sign_in_link}
              >
                {" "}
                Sign in
              </a>
            </div>
          </div>
          <p className={styles.page_help_link__text}>
            Looking to create a page for a business?{" "}
            <a
              href="https://www.linkedin.com/help/linkedin/answer/710?
                    trk=registration-frontend_join-form-page-help-link"
              className={styles.page_help_link__link}
              target="_blank"
              rel="noopener 
                    noreferrer"
            >
              Get help
            </a>
          </p>
        </div>
      </div>{" "}
      {/* End of content */}
      {/* Footer */}
      <footer className={styles.li__footer}>
        <ul className={styles.li__footer_list}>
          <li className={styles.li__footer_list_logo}>
            <img src={FooterLogo} alt="footer logo" />
          </li>
          <li className={styles.li__footer_list_year}>@2023</li>
          <li className={styles.li__footer_list_text}>About</li>
          <li className={styles.li__footer_list_text}>Accssibility</li>
          <li className={styles.li__footer_list_text}>User Agreement</li>
          <li className={styles.li__footer_list_text}>Privacy Policy</li>
          <li className={styles.li__footer_list_text}>Cookie Policy</li>
          <li className={styles.li__footer_list_text}>Copyright policy</li>
          <li className={styles.li__footer_list_text}>Brand Policy</li>
          <li className={styles.li__footer_list_text}>Guest controls</li>
          <li className={styles.li__footer_list_text}>Community Guidelines</li>
          <li className={styles.li__footer_list_text}>
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

export default Signup;
