import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import  HomePage  from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignOut from './pages/sign-in-and-sign-out/SignInAndSignOut';
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUsers: null
    }

  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapshot => {
        this.setState({
          currentUsers: {
            id: snapshot.id,
            ...snapshot.data()
          }
        })
      })
     }
     this.setState({currentUsers: userAuth})
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div>
      <Header currentUsers={this.state.currentUsers}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignOut} />
      </Switch>
    </div>
  );
}
}
export default App;
