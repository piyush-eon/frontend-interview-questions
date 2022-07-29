import {useEffect,useState} from 'react'

const Cart = ({state, dispatch}) => {
    const {cart} = state
    const [total, setTotal] = useState();

    useEffect(() => {
      setTotal(
        cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
      );
    }, [cart]);
  
    const changeQty = (id,qty) => dispatch({
        type: "CHANGE_CART_QTY",
        payload: {
        id: id,
        qty: qty,
        },
    })

  return (
    <div style={{display:'flex', flexDirection:'column', margin:10, backgroundColor:'#ececec', padding:10, width:'20%'}}>
        <b style={{fontSize:30, alignSelf:'center'}}>Cart</b>
        <b style={{alignSelf:'center'}}>Subtotal: $ {total}</b>
        <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
         {cart.length > 0 ?
             cart.map((prod)=>(
                 <div key={prod.title} style={{display:'flex', flexDirection:'column', padding:10, border:"1px solid grey", margin:10, gap:10}}>
                     <img src={prod.thumbnail} alt={prod.title} style={{height:200, objectFit:'cover'}}/>
                     <div style={{display:'flex', justifyContent:'space-between '}}>
                        <span>{prod.title}</span>
                        <b>$ {prod.price}</b>
                     </div>
                     <div style={{display:'flex', gap:10}}>
                         <button onClick={() => changeQty(prod.id, prod.qty - 1)}>-</button>
                         <span>{prod.qty}</span>
                         <button onClick={() => changeQty(prod.id, prod.qty + 1)}>+</button>
                     </div>
                 </div>
                 ))
         :
         <span style={{padding:20, alignSelf:'center'}}>Cart is empty</span>}
        </div>
    </div>
  )
}

export default Cart