import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Globle from "../Images/globe.jpg"
import saad from "../Images/shopping-bag.png"
import foodpandalogo from "../Images/foodPanda Logo.png"

import "./navbar.css";

const Nabar = () => {

    const navigate = useNavigate()
    const [showCart, setShowCart] = useState(false)

    const cart = useSelector(state => state.cart)
    console.log('chala bhai', cart)


    let totalPrice = 0
    cart.map(item => {
        totalPrice += item.price
    })


    return (
        <>
            <div className="main-nav">

                <ul>
                    <li className="logo">
                        <img src={foodpandalogo} onClick={() => navigate('/')} />

                    </li>

                    <li className="loginBtn">
                        <button onClick={() => navigate('/signIn')}>Login</button>
                    </li>

                    <li className="signUpBtn">
                        <button onClick={() => navigate('/signUp')}>Sign Up</button>
                    </li>

                    <li className="list" >
                        <img src={Globle} /><span>EN</span>
                    </li>

                    <li className="list" >
                        <img src={saad} onClick={() => setShowCart(!showCart)} />
                        {cart.length}

                    </li>


                    {showCart && <div style={{ position: 'absolute', top: 80, right: 10, backgroundColor: 'white', width: '300px', color: 'black', border: "3px solid #D70F64", borderRadius: "10px", boxShadow: '2px 5px 10px rgba(0, 0, 0, 0.7)' }}>
                        {cart.map(item => {
                            return <div>
                                {item.item} | Rs.{item.price}

                            </div>

                        })}
                        <br></br>
                        <p><b>Total Price: Rs. {totalPrice}</b></p>


                        {/* 
                        {cart.map(item => {
                            return <div>
                                {item.category_name.item} | Rs.{item.price}
                            </div>
                        })} */}
                    </div>}

                </ul>

            </div>

        </>
    )

}

export default Nabar;