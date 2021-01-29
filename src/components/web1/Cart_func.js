import React from 'react';
import '../css/Menu.css';
import { connect } from 'react-redux'
import CartView from './CartView.js';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const UpdateState = (component) => {
  component.setState({ viewed: true})
}

function Cart(){

  const items = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClick = (event)=> {
    setOpen((prev) => !prev);

  };


   const handleClickAway = () => {
     setOpen(false);
   };



    return (
      <ClickAwayListener onClickAway={handleClickAway}>
        <div  class = "item-cart">
          <div class = "cart-header" onClick={()=>{handleClick()}}>
              <a>
                <img style={{"width":"32px", "height":"32px"}} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDkwLjc0IDQ5MC43NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDkwLjc0IDQ5MC43NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojNDU1QTY0OyIgY3g9IjM5NC42NjciIGN5PSI0MjYuNzAzIiByPSI1My4zMzMiLz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiM0NTVBNjQ7IiBjeD0iMTgxLjMzMyIgY3k9IjQyNi43MDMiIHI9IjUzLjMzMyIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQzEwNzsiIGQ9Ik00ODgsNzguMzA5Yy0yLjAyNi0yLjI5NC00Ljk0LTMuNjA3LTgtMy42MDVIOTZjLTUuODkxLDAuMDA1LTEwLjY2Miw0Ljc4NS0xMC42NTcsMTAuNjc3DQoJYzAuMDAxLDAuNjU1LDAuMDYyLDEuMzA5LDAuMTgyLDEuOTUzbDMyLDE3MC42NjdjMC45NDQsNS4wNDMsNS4zNDQsOC42OTksMTAuNDc1LDguNzA0aDI5Mi45OTINCgljMjYuOSwwLjAwMyw0OS41OTItMjAuMDI3LDUyLjkyOC00Ni43MmwxNi43NDctMTMzLjI5MUM0OTEuMDI1LDgzLjY0NCw0OTAuMDU0LDgwLjU4OSw0ODgsNzguMzA5eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzQ1NUE2NDsiIGQ9Ik00MzcuMzMzLDM1Mi4wMzdIMTkxLjEyNWMtMzUuNTYxLTAuMDc0LTY2LjE2My0yNS4xNTYtNzMuMjE2LTYwLjAxMUw2NS45MiwzMi4wMzdIMTAuNjY3DQoJQzQuNzc2LDMyLjAzNywwLDI3LjI2MSwwLDIxLjM3czQuNzc2LTEwLjY2NywxMC42NjctMTAuNjY3aDY0YzUuMDctMC4wMDEsOS40MzksMy41NjYsMTAuNDUzLDguNTMzbDUzLjcxNywyNjguNTg3DQoJYzUuMDM1LDI0Ljg5NiwyNi44ODgsNDIuODE3LDUyLjI4OCw0Mi44OGgyNDYuMjA4YzUuODkxLDAsMTAuNjY3LDQuNzc2LDEwLjY2NywxMC42NjdDNDQ4LDM0Ny4yNjEsNDQzLjIyNCwzNTIuMDM3LDQzNy4zMzMsMzUyLjAzNw0KCXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"/>
              </a>
              <a class="badge">
                {items.total_count}
              </a>
          </div>
          {open ? (<CartView/> ) : null}
        </div>
      </ClickAwayListener >
    );

}
const mapStateToProps = (state)=>{

    return{
        items: state.cartReducer,
        //addedItems: state.addedItems
    }
}
export default Cart
