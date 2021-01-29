import React from 'react';
import '../css/Menu.css';
import '../css/Main.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
import { removeItem,addQuantity,subtractQuantity} from './Cart/cartActions'
import { createBrowserHistory } from 'history';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import NumberFormat from 'react-number-format';

const history = createBrowserHistory();

class CartView extends React.Component {
  constructor() {
    super();
    this.state = {
      viewed: false
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
  GotoFinish = ()=>{
    history.push('/sample');
  }
  render() {
    let PaymentTotal =
    (
      <div class="div-col-l w-40">
        <div class="cart-payment-access padding-5">
          <h5>Thanh toán</h5>
          <div class="cart-payment-access-body">
            <table class="w-100">
              <tbody>
                <tr>
                  <td color="#848788" class="css-8ogxmh">Tạm tính</td>
                  <td class="right-align">
                    <NumberFormat value={this.props.total} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} suffix={' USD'} renderText={value => <span class="css-htm2b9">{value}</span>}/>
                  </td>
                </tr>
                <tr>
                  <td color="#848788" class="css-13izjcd">Phí vận chuyển</td>
                  <td class="right-align">
                    <NumberFormat value={0} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} suffix={' USD'} renderText={value => <span class="css-htm2b9">{value}</span>}/>
                  </td>
                </tr>
                <tr>
                  <td color="#848788" class="css-13izjcd">Khuyến mãi</td>
                  <td class="right-align">
                    <NumberFormat value={0} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} suffix={' USD'} renderText={value => <span class="css-htm2b9">{value}</span>}/>
                  </td>
                </tr>
                <tr>
                  <td color="#848788" class="css-13izjcd">Thành tiền</td>
                  <td class="right-align">
                    <NumberFormat value={this.props.total} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} suffix={' USD'} renderText={value => <span class="css-htm2b9">{value}</span>}/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Link to="/payment_finish">
            <Button variant="outline-dark">Thanh toán</Button>
          </Link>
        </div>
      </div>

    )
    let CartItems = this.props.items.length ?
          (
            this.props.items.map(item=>{
                return(
                    <div className="cart-payment-item flex padding-5 row" key={item.id}>
  											<div class="col-10">
                          <picture>
                            <img class = "cart-item-image-src" alt={item.title} src={item.image} loading="lazy" decoding="async"/>
                          </picture>
                        </div>
                        <div class="col-50">
			                    <span class="item-title">{item.title}</span>
                        </div>
                        <div class="col-10">
    											<span>
    													Số lượng: {item.quantity}
    											</span>
                        </div>
                        <div class="col-10">
                          <NumberFormat value={item.quantity * item.price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} suffix={' USD'} renderText={value => <span>Tiền: {value}</span>}/>
                        </div>
                        <ButtonGroup size="sm" class="cart-item-btn">
                          <Button variant="outline-dark" onClick={()=>{this.handleAddQuantity(item.id)}}>Thêm</Button>
                          <Button variant="outline-dark" onClick={()=>{this.handleSubtractQuantity(item.id)}}>Bớt</Button>
                        </ButtonGroup>
                        <div onClick={()=>{this.handleRemove(item.id)}}>
                          <i class="fas fa-trash-alt"></i>
                        </div>
  									</div>

                )
              })
          ):
             (
                <p>Chưa có sản phẩm nào.</p>
             )
       return(
       <div class="cart-payment container-panel flex">
         <div class="div-col w-80">
            <div class="cart-payment-header">
              <h4>Giỏ hàng của bạn: {this.props.total_count} sản phẩm </h4>
            </div>
            <div class="cart-payment-info">
              {CartItems}
            </div>
          </div>

          {PaymentTotal}
        </div>
       )
  }
}
const mapStateToProps = (state)=>{

    return{
        total: state.cartReducer.total,
        total_count: state.cartReducer.total_count,
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
