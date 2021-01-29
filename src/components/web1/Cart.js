import React from 'react';
import '../css/Menu.css';
import { connect } from 'react-redux'
import CartView from './CartView.js';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';



class Cart extends React.Component {
  constructor() {
    super();
    this.wrapperRef = React.createRef();
    this.state = {
      clicked: false
    };
  }

  handleClick = (event)=> {


    this.setState({
        clicked: this.state.clicked ? false : true
    });

  };

  handleClickOutside = (event) => {
    console.log('handleClickOutside');
    const { target } = event;
    if (!this.wrapperRef.current.contains(target)) {
      this.setState({
          clicked: false
      });
    }
   }
   handleClickAway = () => {
     this.setState({
         clicked: false
     });
   };

  render() {
    return (
      <ClickAwayListener onClickAway={()=>{this.handleClickAway()}}>
        <div  class = "item-cart">
          <div class = "cart-header" onClick={()=>{this.handleClick()}}>
              <i class="fas fa-shopping-cart"></i>
              <a href="#">
                <img src="/icons/2922510.svg" alt=""/>
              </a>
              &nbsp; Giỏ hàng: {this.props.items.total_count}
          </div>
          {this.state.clicked ? (<CartView/> ) : null}
        </div >

      </ClickAwayListener>
    );
  }
}
const mapStateToProps = (state)=>{

    return{
        items: state.cartReducer,
        //addedItems: state.addedItems
    }
}
export default connect(mapStateToProps, null)(Cart)
