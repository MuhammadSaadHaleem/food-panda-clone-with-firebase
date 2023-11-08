import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleRestaurant } from "../config/firebase";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useDispatch } from 'react-redux'
import { addCartToStore, removeCartToStore } from "../store/cartReducer"
import Nabar from "../components/Navbar";
import Footer from "../components/Footer";



const DetailPage = () => {
    const [restroData, setRestroData] = useState()
    // const [cart, setCart] = useState([])

    const dispatch = useDispatch()

    const { id } = useParams()

    useEffect(() => {
        getData()
    }, [])


    const getData = async () => {
        const data = await getSingleRestaurant(id)
        setRestroData(data)
    }

    const addToCart = (item) => {
        dispatch(addCartToStore(item))
        // alert("Saad")
    }

    const removeFromCart = (item) => {
        dispatch(removeCartToStore(item))
    }
    if (!restroData) {
        return <div>Loading...</div>
    }

    const { opening_hours, restaurant_name, menu_categories, image_url, cuisine_type, address } = restroData

    const open_hrs = []

    for (let key in opening_hours) {
        open_hrs.push(`${key}: ${opening_hours[key]}`)
    }

    console.log('menu_categories', menu_categories)
    return (
        <>

            <Nabar />
            <div style={{ backgroundColor: "#F7F7F7" }}>

                <div style={{ margin: "10px" }}>
                    {/* <img src={image_url} style={{ marginLeft:"200px",width: "400px", height: "200px" }}></img> */}
                    <p style={{ marginLeft: "200px", position: "absolute", fontSize: "20px" }}>{cuisine_type} <strong>{address.street} {address.city} </strong></p>
                    <br></br>
                    <h1 style={{ marginLeft: "200px", fontSize: "50px" }}>{restaurant_name}</h1>
                    <p style={{ marginLeft: "200px", fontSize: "17px" }}>Rs. 199 Minimum - Rs. 7.99 Service Fee</p>
                    <p style={{ marginLeft: "200px", color: "#D70F64", fontSize: "17px" }}>See reviews - More info</p>
                    <br></br>

                    <div style={{ marginLeft: "200px", fontSize: "18px" }}>
                        <h3>Timings</h3>
                        {open_hrs.map(item => {
                            return <><p>{item} </p></>
                        })}
                    </div>

                    <br></br>
                    <h3 style={{ marginLeft: "200px", fontSize: "50px" }}>Menu</h3>

                    {/* <ul>
                    {menu_categories.map(item => {
                        return <li>{item.category_name}<button onClick={() => addToCart(item)}>Add to cart</button></li>
                    })}
                </ul> */}

                    <Tabs style={{ marginLeft: "200px" }}>

                        <TabList style={{ fontSize: "25px", width: "85%" }}>
                            {menu_categories.map(item => {
                                return <Tab>{item.category_name}</Tab>
                            })}
                        </TabList>

                        {menu_categories.map(item => {
                            return <TabPanel style={{ display: "flex", marginLeft: "100px" }}>
                                {item.items.map(subItem => {
                                    return <div style={{ border: "1px solid gray", borderRadius: "5px", width: "550px", marginLeft: "50px" }}>

                                        <strong style={{ marginLeft: "10px", fontSize: "30px", position: "absolute" }}>{subItem.item}</strong>

                                        <p style={{ position: "absolute", marginTop: "40px", marginLeft: "12px" }}>Rs. {subItem.price}</p>

                                        <button onClick={() => addToCart(subItem)} style={{
                                            backgroundColor: '#008CBA',
                                            color: 'white',
                                            marginLeft: "12px",
                                            border: 'none',
                                            padding: '5px 10px',
                                            textDecoration: 'none',
                                            display: 'inline-block',
                                            fontSize: '30px',
                                            margin: '4px 2px',
                                            cursor: 'pointer'
                                        }}>+</button>

                                        <button onClick={() => removeFromCart(subItem)} style={{
                                            backgroundColor: 'red',
                                            color: 'white',
                                            border: 'none',
                                            padding: '5px 15px',
                                            textDecoration: 'none',
                                            display: 'inline-block',
                                            fontSize: '30px',
                                            margin: '4px 2px',
                                            cursor: 'pointer'
                                        }}>-</button>


                                        <img src={subItem.item_image_url} style={{ marginLeft: "250px", width: "170px", height: "130px" }}></img>


                                    </div>
                                })}

                            </TabPanel>
                        })}

                    </Tabs>

                    <br></br><br></br><br></br><br></br>

                </div>

            </div>

            <Footer />
        </>
    )

}

export default DetailPage;
