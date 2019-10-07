import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music'
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/app-reducer';
import { compose } from '../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';
import { withRouter } from 'react-router-dom';
import Preloader from './components/common/preloader/Preloader';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="wrap">
        <HeaderContainer />
        <Navbar />
        <Route path='/profile/:userId?' render={() =>
          <React.Suspense fallback={<div>Загрузка...</div>}>
            <ProfileContainer />
          </React.Suspense>
        } />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/music' component={Music} />
        <Route path='/login' component={Login} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
