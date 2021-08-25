import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Nastr from './components/Nastr/Nastr';
import UsersContainer from './components/Users/UsersContainer';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

const ProfileContainer = React.lazy( () => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy( () => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp(); 
  }

  render() {
    if(!this.props.initialized) {
      return <Preloader />
    } 
    return ( 
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
          <React.Suspense fallback={<Preloader />}>
            <Switch>
              <Route exact path='/' render={ () => <ProfileContainer className={'menu'}/> }/>
              <Route path='/dialogs' render={ () => <DialogsContainer /> } className={'menu'} />
              <Route path='/profile/:userId?' render={ () => <ProfileContainer /> } className={'menu'} />
              <Route path='/users' render={ () => <UsersContainer /> } className={'menu'} />
              <Route path='/login' render={ () => <Login /> } className={'menu'} />
              <Route path='/news' render={ () => <News /> } className={'menu'} />
              <Route path='/music' render={ () => <Music /> } className={'menu'} />
              <Route path='/nastr' render={ () => <Nastr /> } className={'menu'} />
              <Route path='*' render={ () => <div>404 NOT FOUND</div>} className={'menu'} />
            </Switch>
          </React.Suspense>
          </div>
          
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp} ))(App);