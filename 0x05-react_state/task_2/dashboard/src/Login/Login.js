import React from 'react';
import { StyleSheet, css } from 'aphrodite';


class Login extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false,
       email: '',
       password: '',
       enableSubmit: false
    }

    // this.handleEmailChange = this.handleEmailChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleLoginSubmit = async(e) => {
    e.preventDefault();
    try {
      this.setState({
        isLoggedIn: true
      })
      const data = {
        email: this.state.email,
        password: this.state.password
      }
      // this.props.logIn(data)
      console.log(data);
    } catch(err){
      console.log(err)
    } finally {
      // clear input after submitting
      this.setState({
        enableSubmit: false,
        email: '',
        password: ''
      })
    }
  }

  componentDidUpdate() {
    const { email, password, enableSubmit } = this.state;

    if (email !== '' && password !== '') {
      if (!enableSubmit) {
        this.setState({ enableSubmit: true });
      }
    } else {
      if (enableSubmit) {
        this.setState({ enableSubmit: false });
      }
    }
  }

  render() {
    const {email, password, enableSubmit} = this.state
    return (
      <form onSubmit={this.handleLoginSubmit} className={css(styles.login)}>
          <p>Login to access the full dashboard</p>
        <div className={css(styles.medium)}>
          <div className={css(styles.label)}>
            <label htmlFor="mail">Email:</label>
            <input 
              type="email" 
              name="mail" 
              id="mail" 
              value={email}
              onChange={this.handleChangeEmail}
            />
          </div>
          <div className={css(styles.label)}>
            <label htmlFor="psswd">Password:</label>
            <input 
              type="password" 
              name="psswd" 
              id="psswd" 
              value={password}
              onChange={this.handleChangePassword}
            />
          </div>
          <input 
            type="submit" 
            disabled={!enableSubmit} 
            value={'OK'} 
            className={css(styles.btn, !enableSubmit && styles.disabledBtn)} 
          />
        </div>
      </form>
    );
  }
  
}


const styles = StyleSheet.create({
  login: {
    padding: '20px 0',
    width: '100%'
  },
  medium: {
    '@media (min-width: 900px)': {
      display: 'flex',
      width: '100%'
    }
  },
  disabledBtn: {
    cursor: 'not-allowed'
  },
  label: {
    width: '100%',
    display: 'flex',
    columnGap: '10px',
    margin: '10px 5px',
    '@media (min-width: 900px)': {
      width: 'auto',
      margin: '0 5px'
    }
  },
  btn: {
    cursor: 'pointer',
    marginLeft: '7px',
    '@media (min-width: 900px)': {
      marginLeft: 0,
    }
  }
})

export default Login;
