/******************************** IMPORTS ********************************/
// libraries
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Redirect } from "react-router-dom";
// local files
import * as sessionActions from "../../store/sessionReducer";
import "./SignupFormPage.css";


/******************************* COMPONENT *******************************/
function SignupFormPage() {

  /****************** access store *******************/
  const sessionUser = useSelector((state) => state.session.user);

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  /****************** manage state *******************/
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  /***************** handle events *******************/

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ firstName, lastName,email, username, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  /**************** render component *****************/
  // if (sessionUser) return <Redirect to="/" />;

  return (
    <div className="page-wrapper-container">
      <div id="SignupFormPage-component">

        <div className='login-or-signup-form-title'>
          <div>Logo</div>
          <div>Create your Market account</div>
        </div>


      <form onSubmit={handleSubmit} className='login-or-signup-form'>

      <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className='login-or-signup-form-input-field'
        >
        </input>

        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className='login-or-signup-form-input-field'
        >
        </input>

        <input
          type="text"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='login-or-signup-form-input-field'
        >
        </input>


        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className='login-or-signup-form-input-field'
        >
        </input>

        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='login-or-signup-form-input-field'
        >
        </input>

        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className='login-or-signup-form-input-field'
        >
        </input>

        <div
        className='login-or-signup-form-disclaimer'
        id='signup-form-disclaimer-container'
        >
            <div>By creating an account, you are agreeing to the Market terms & conditions and Market privacy policy, including receipt of Market exclusive email offers and promotions. To manage your marketing choices please access the Choice section of the Market Privacy Policy or call Market Guest Relations. Message and data rates may apply when including a phone number.</div>

            <div>
              <Link
              href='https://www.target.com/c/terms-conditions/-/N-4sr7l'
              id='signup-form-disclaimer-link'
              >
              Terms & Conditions
              </Link>
            </div>

            <div>
              <Link
              href='https://www.target.com/c/target-privacy-policy/-/N-4sr7p'
              id='signup-form-disclaimer-link'
              >
              Privacy Policy
              </Link>
            </div>

        </div>

        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>

        <button
        type="submit"
        className='login-or-signup-form-button'
        id='login-or-signup-form-confirm-button'
        style={{marginTop:'0px'}}
        >
          Create account
        </button>
      </form>

      <div id='signup-form-proceed-button'>
        <NavLink exact to={`/login`} id='signup-form-proceed-button'>

            Or sign in
        </NavLink>
      </div>

        <div className="login-or-signup-form-disclaimer-promotions-container">
          <Link
            href='https://help.target.com/help/subcategoryarticle?childcat=Current+promotions&parentcat=Promotions+%26+Coupons&searchQuery=search+help'
            className='login-or-signup-form-disclaimer'
            id='login-or-signup-form-disclaimer-promotions'
            >
            <span>*See offer details. </span>
            Restrictions apply. Pricing, promotions and availability may vary by location and at Market.com
          </Link>
        </div>


      </div>
    </div>
  );
}

/******************************** EXPORTS ********************************/
export default SignupFormPage;
