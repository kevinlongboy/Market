/******************************** IMPORTS ********************************/
// libraries
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Redirect } from 'react-router-dom';
// local files
import * as sessionActions from '../../store/sessionReducer';
import './LoginFormPage.css';


/******************************* COMPONENT *******************************/
function LoginFormPage() {

  /****************** access store *******************/
  const sessionUser = useSelector(state => state.session.user);

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  /****************** manage state *******************/
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  /***************** handle events *******************/
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
    .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  }

  /**************** render component *****************/
  // if (sessionUser) return (
  //   <Redirect to="/" />
  // );

  return (
    <div className="page-wrapper-container">
        <div id="LoginFormPage-component">

          <div className='login-or-signup-form-title'>
            <div>Logo</div>
            <div>Sign into your Market account</div>
          </div>

            <form onSubmit={handleSubmit} className='login-or-signup-form'>

                <input
                  type="text"
                  placeholder='Email or username'
                  value={credential}
                  onChange={(e) => setCredential(e.target.value)}
                  required
                  className='login-or-signup-form-input-field'
                  >
                </input>

                <input
                  type="password"
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className='login-or-signup-form-input-field'
                  >
                </input>

              <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
              </ul>

              <button
              type="submit"
              className='login-or-signup-form-button'
              id='login-or-signup-form-confirm-button'
              >
                Sign In
              </button>

            </form>

          <div>
            <NavLink exact to={`/signup`}>
              <button
              className='login-or-signup-form-button'
              id='login-or-signup-form-proceed-button'
              >
                Create your Market account
              </button>
            </NavLink>
          </div>

          <div className='login-or-signup-form-disclaimer'>
            <div>By signing in, you agree to the following:</div>

            <div>
              <Link
              href='https://www.target.com/c/terms-conditions/-/N-4sr7l'
              id='login-form-disclaimer-link'
              >
              Market terms and conditions
              </Link>
            </div>

            <div>
              <Link
              href='https://www.target.com/c/target-privacy-policy/-/N-4sr7p'
              id='login-form-disclaimer-link'
              >
              Market privacy policy
              </Link>
              </div>
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
export default LoginFormPage;
