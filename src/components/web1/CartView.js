import React, {useEffect} from 'react';
import '../css/Menu.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
import { removeItem,addQuantity,subtractQuantity} from './Cart/cartActions'
import Menu from '@material-ui/core/Menu';


class CartView extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.dialogClose = () => {
            this.setState({ viewed: false });
        };
    this.state = {
      viewed: true,
      anchorEl: null
    };

  }
  //to remove the item completely
  handleRemove = (id)=>{
      this.props.removeItem(id);
  }
  //to add the quantity
  handleAddQuantity = (id)=>{
      this.props.addQuantity(id);
  }
  //to substruct from the quantity
  handleSubtractQuantity = (id)=>{
      this.props.subtractQuantity(id);
  }



  componentDidMount() {
    // document.addEventListener('click', this.handleClickOutside)
    // console.log('componentDidMount');
    // Nếu khởi tạo lại Component, set state

  }

  componentWillUnmount() {
    // important
    // document.removeEventListener('click', this.handleClickOutside)
    // console.log('componentWillUnmount');

  }


  handleClickOutside = (event) => {
    return;
    console.log('handleClickOutside');
    const { target } = event;
    console.log(this.wrapperRef.current.parentNode);
    if (!this.wrapperRef.current.parentNode.contains(target)) {

      this.setState({
          viewed: false
      });
      document.removeEventListener('click', this.handleClickOutside)

    }
   }
  render() {

    let addedItems = this.props.items.length ?
            (
                this.props.items.map(item=>{
                    return(
                        <li className="collection-item-cart" key={item.id} ref={this.wrapperRef}>
														<div className="item-desc">
																<span className="title"><b>{item.title}</b></span>
																<p>Price: {item.price}$</p>
																<p>
																		Quantity: {item.quantity}
																</p>
                                <button onClick={()=>{this.handleAddQuantity(item.id)}}>Thêm</button>
                                <button onClick={()=>{this.handleSubtractQuantity(item.id)}}>Bớt</button>
																<button onClick={()=>{this.handleRemove(item.id)}}>Xóa</button>
														</div>

												</li>

                    )
                })
            ):
             (
                <p>Chưa có sản phẩm nào.</p>
             )

       return(
          this.state.viewed ?
            (<div className="cart-view" open={true}>

                <h4> Tổng tiền: {this.props.total} $</h4>
                <Link to="/payment_cart">Thanh toán</Link>
                <ul className="collection">
                    {addedItems}
                </ul>
            </div>)
          : null

       )
  }
}
const mapStateToProps = (state)=>{

    return{
        total: state.cartReducer.total,
        items: state.cartReducer.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartView)
