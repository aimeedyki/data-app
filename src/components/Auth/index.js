import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { logIn } from 'store/login/actions';

const Auth = ({ loggedIn, logIn, children }) => {

  if (loggedIn) {
    return children;
  } else {
    return <LoginForm onLoginSuccess={logIn} />;
  }
}

function mapStateToProps(state) {
    return {
      loggedIn: state.login.loggedIn,
    };
  }
  
  const mapDispatchToProps = {
    logIn,
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
