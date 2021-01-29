import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,CHANGE_ORDER } from './cart-actions'
import initState from '../Data/ItemsData'

const Storage = (cartItems) => {
    localStorage.setItem('items', JSON.stringify(cartItems.length > 0 ? cartItems: []));
}
const cartReducer= (state = initState,action)=>{
   //console.log(action.type);
    //INSIDE HOME COMPONENT, action đc khai báo trong Actions.
    if(action.type === ADD_TO_CART){
         let addedItem = state.items.find(item=> item.id === action.id)

         //Storage(state.addedItems);
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            //addedItem.quantity += 1
             state.addedItems[state.addedItems.findIndex(item => action.id === item.id)].quantity += 1
             return{
                ...state,
                 addedItems: [...state.addedItems],
                 total: state.total + addedItem.price,
                 total_count: state.total_count + 1
                  }
         }
         else if ( addedItem){
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price;


            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal,
                total_count: state.total_count + 1
            }

        }
        else
          return state
    }
    if (action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal,
            total_count: state.total_count - itemToRemove.quantity
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
          let addedItem = state.items.find(item=> item.id === action.id)
          //addedItem.quantity += 1
          let newTotal = state.total + addedItem.price
          state.addedItems[state.addedItems.findIndex(item => action.id === item.id)].quantity += 1
          return{
              ...state,
              addedItems: [...state.addedItems],
              total: newTotal,
              total_count: state.total_count + 1
          }
    }
    if(action.type=== SUB_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
        console.log(addedItem);
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal,
                total_count: state.total_count - 1
            }
        }
        else {
            //addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            state.addedItems[state.addedItems.findIndex(item => action.id === item.id)].quantity -= 1
            return{
                ...state,
                addedItems: [...state.addedItems],
                total: newTotal,
                total_count: state.total_count - 1
            }
        }

    }
    if(action.type === CHANGE_ORDER){

      return{
          ...state,
          itemViews: { order: action.order}
      }
    }
    else {
      return state
      }

}

export default cartReducer
