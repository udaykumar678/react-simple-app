import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getShows } from '../store/actionCreators';
import Shows from './Shows/Shows';
import NavBar from './NavBar/NavBar';
import WrapperComponent from '../hoc/WrapperComponent';
import Home from './Home/Home';
import ShowLayout from './ShowLayout/ShowLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.getShows();
  }

  render() {
    return (
      <BrowserRouter>
        <WrapperComponent>
          <NavBar/>
          <div className="container">
                <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/shows" exact render={() => <Shows shows={this.props.shows}/>}/>
                  <Route path="/shows/:showId" component={ShowLayout}/>
                </Switch>
          </div>
      </WrapperComponent>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  shows: state.appData.shows
});

const mapDispatchToProps = dispatch => ({
  getShows: () => dispatch(getShows())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
