import React from 'react';
import './App.css';
import './components/css/page.css';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, useParams, Switch, useRouteMatch } from "react-router-dom";
import { Counter } from './components/web1/Counter';
import { Home } from './Home';
import HeaderPanel from './components/web1/HeaderPanel.js';
import MainHeaderPanel from './components/web1/MainHeaderPanel.js';
import BrandList from './components/web1/BrandList.js';
import Search from './components/web1/Search.js';
import Menu2 from './components/web1/Menu2.js';
import ItemDetailViewer from './components/web1/ItemDetailViewer.js';
import CartPayment from './components/web1/CartPayment.js';
import Login from './components/web1/Login.js';
import FooterPanel from './components/web1/FooterPanel.js';
import Snackbar from '@material-ui/core/Snackbar';
import ItemSearch from './components/web1/ItemSearch.js';
import NotFoundPage from './components/web1/NotFoundPage.js';
import ItemEditor from './components/web1/ItemEditor.js';
import UserInfo from './components/web1/UserInfo.js';
import Todos from './components/web1/Todos.js';

function TransBack()
{
  return(
    <div class="trans-background">
    </div>
  )
}


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          showSnack: false,

      };

    }

    handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      this.setState({showSnack: false})
    };
  render() {

    const { message } = this.props;
    return (
      <div>
        <BrowserRouter>
          <HeaderPanel/>
          <Search/>
          <div class="TempDiv">
          </div>

          <Route exact path='/' component={Home} />
  				<Route path='/counter' component={Counter} />
          <Route path='/payment_cart' component={CartPayment} />
          <Route path='/product/:id' component={ItemDetailViewer} />
          <Route path='/login' component={Login} />
          <Route path='/search' component={ItemSearch} />
          <Route path='/not_found' component={NotFoundPage} />
          <Route path='/item_editor' component={ItemEditor} />
          <Route path='/user-info' component={UserInfo} />
          <Route path='/todo-list' component={Todos} />
          <FooterPanel/>
  			</BrowserRouter>
         <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open= {this.props.ShowBackgound}
          autoHideDuration={4000}
          onClose={this.handleClose}
          message= {message ? message : ''}

        />
        {this.props.ShowBackgound ? TransBack() : null}
      </div>

    );
  }
}
function mapState(state) {

    const { message } = state.Message;
    const ShowBackgound = state.Message.isShowBackgound;

    return { message, ShowBackgound };
}
const connectedApp = connect(mapState, null)(App);
export default connectedApp
