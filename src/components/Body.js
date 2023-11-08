import Panda from "../Images/panda.png"
import ManWithFrypen from "../Images/man-with-frypen.png"
import Islamabad from "../Images/Islamabad.jpg"
import Karachi from "../Images/Karachi.jpg"
import Faisalabad from "../Images/Faisalabad.jpg"
import Lahore from "../Images/Lahore.jpg"
import Rawalpindi from "../Images/Rawalpindi.jpg"
import Abottabad from "../Images/city-tile-Abottabad.jpg"
import Bhawalpur from "../Images/Bhawalpur.jpg"
import Deraghazikhan from "../Images/DeraGhaziKhan.jpg"
import QRcode from "../Images/pkhomepageqrcode.png"
import mobile from "../Images/mobile.png"
import AppStore from "../Images/app-store.png"
import GoogleApp from "../Images/google-play.png"
import AppGallery from "../Images/App-gallery.png"
import HomeCoporate from "../Images/home-corporate-pk.png"
import './Body.css'


import Card from "./Card"
import { useNavigate } from "react-router"

import './Body.css'
import { postRestaurants } from "../config/firebase";
import { Dashboard } from "../views/DashBoard"

const Body = () => {
    const navigate = useNavigate()


    const data = () => {
        postRestaurants()
    }
    return (
        <>
            <div className="container1">


                <div className="section1">
                    <p>It's the food and groceries you love, delivered</p>

                    <div className="inputBtn">

                        <div className="inputBtn1">
                            <input placeholder="Enter your full address"></input>
                            <button>Find food</button>
                        </div>

                    </div>

                </div>

                <div className="section">
                    <img src={Panda} />
                </div>


            </div>


            <div className="container2">
                <div className="frypenMan">

                    <div>
                        <p>You prepare the food, we handle the rest</p>

                    </div>
                    <div className="frypenMan1">
                        <img src={ManWithFrypen} />

                    </div>

                </div>

            </div>


            <div className="container3">
                <div className="frymenCard">

                    <div className="frymenCard1">
                        <p style={{ fontSize: 22 }}>List your restaurant or shop on foodpanda</p>
                        <br></br>
                        <p>Would you like millions of custommers to enjoy your amazing food and groceries? So would we!</p>
                        <br></br>
                        <p>It's simple: we list your menu and product lists online, help you process orders, pick them up, and delivery them to hungry pandas – in a heartbeat!</p>
                        <br></br>
                        <p>Interested? Let's start our partnership today!</p>
                        <br></br>
                        <button>Get started</button>
                    </div>

                </div>

            </div>


            <div className="container4">
                <div className="cityNames">

                    <div>
                        <p>Find us in these cities and many more!</p>
                    </div>
                </div>

                <div className="citycard">

                    <Card data={{}} image={Islamabad} button={"Islamabad"} />
                    <Card data={{}} image={Karachi} button={"Karachi"} onClick={() => navigate('/dashboard')} />
                    <Card data={{}} image={Lahore} button={"Lahore"} />
                    <Card data={{}} image={Faisalabad} button={"Faisalabad"} />

                </div>
                <div className="citycard">

                    <Card data={{}} image={Rawalpindi} button={"Rawalpindi"} />
                    <Card data={{}} image={Abottabad} button={"Abbottabad"} />
                    <Card data={{}} image={Bhawalpur} button={"Bahawalpur"} />
                    <Card data={{}} image={Deraghazikhan} button={"Dera-ghazi-khan"} />

                </div>
            </div>


            <div className="container5" >
                <div className="mobile" >
                    <div>
                        <p style={{ fontSize: "2.7rem", margin: "70px 70px 70px " }}>Put us in your pocket    </p>
                    </div>

                    <div className="mobile1" style={{ border: "1px solid #D70F64", marginLeft: "5vh", marginRight: "10vh", borderRadius: "12px", height: "50vh", backgroundColor: "#D70F64" }}>
                        <p style={{ color: "white", fontSize: "2rem", margin: "30px 50px 30px " }}>Download the food and groceries you love</p>

                        <div className="QRcode">
                            <img src={QRcode} style={{ margin: "30px 50px 30px ", border: "2px solid white", borderRadius: "10px", display: "flex", backgroundColor: "#D70F64", height: "200px", width: "200px" }}></img>
                            <p style={{ marginTop: "-200px", marginLeft: "300px", display: "flex", color: "white", width: "60vh", fontSize: "1.5rem" }}>
                                It's all at your fingertips – the restaurants and shops you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.</p>


                            <div>
                                <img src={AppStore} style={{ width: "200px", height: "100px", marginLeft: " 50px", marginTop: "40px" }} />
                                <img src={GoogleApp} style={{ width: "200px", height: "60px", marginLeft: " 20px" }} />
                                <img src={AppGallery} style={{ width: "200px", height: "60px", marginLeft: " 20px" }} />
                            </div>




                            <img src={mobile} style={{ width: "80vh", height: "80vh", marginLeft: "1000px", marginTop: "-570px" }} />

                        </div>

                    </div>

                    {/* <div className="mobile1">
                        <p>Download the food and groceries you love</p>


                        <div className="qrcode" >
                            <img src={QRcode} />
                            <p>It's all at your fingertips – the restaurants and shops you love.
                                Find the right food and groceries to suit your mood, and make the
                                first bite last. Go ahead, download us.
                            </p>
                        </div>
                        <div className="app">
                            <button>App Store</button>
                            <button>Google Play</button>
                            <button>App Gallery</button>
                        </div>
                    </div>
                    <div className="mobilePic">
                        <img src={mobile} alt="" />

                    </div> */}

                </div>
            </div >


            <div className="container2">
                <div className="frypenMan">

                    <div>
                        <p>Take your office out to lunch</p>

                    </div>
                    <div className="frypenMan1">
                        <img src={HomeCoporate} style={{ width: "100%", height: "52vh" }} />

                    </div>

                </div>

            </div>


            <div className="container3">
                <div className="frymenCard">

                    <div className="frymenCard1">
                        <p style={{ fontSize: 22 }}>foodpanda for business</p>
                        <br></br>
                        <p>Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more.</p>

                        <br></br>
                        <button>Get started</button>
                    </div>

                </div>

            </div>


            <div style={{ marginTop: "-100px", marginLeft: "100px", width: "90%" }}>
                <p style={{ fontSize: "2.7rem" }}><strong>Order food and groceries online from the best restaurants and shops on foodpanda</strong></p>

                <br></br>

                <p>Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? Then foodpanda Pakistan is the right destination for you! foodpanda offers you a long and detailed list of the best restaurants and shops near you to help make your every day easier.</p>
                <br></br>

                <p style={{ fontSize: "2.7rem" }}><strong>What's new?</strong></p>
                <br></br>
                <p>✓ Wide variety of restaurants and shops, an abundance of cuisines & products.</p>
                <p>✓ High quality delivery service.</p>
                <p>✓ Live chat feature to give App users instant help when they need it.</p>
                <p>✓ NEW: foodpanda grocery delivery! Discover the best shops, pharmacies, bakeries and more near you.</p>

                <br></br>
                <p style={{ fontSize: "1.5rem" }}><strong>Frequently Asked Questions</strong></p>

                <br></br>
                <p style={{ fontSize: "1.2rem" }}><strong>How can I get foodpanda delivery?</strong></p>

                <br></br>
                <p>To get foodpanda delivery, simply locate the restaurants and shops near you by typing in your address, browse through a variety of restaurants and cuisines, check menus and prices, choose your dishes and add them to the basket. Now you only need to checkout and make the payment. Soon your delicious food will arrive at your doorstep!</p>

                <br></br>
                <p style={{ fontSize: "1.2rem" }}><strong>Which takeout restaurants open now near me?</strong></p>

                <br></br>
                <p>You can check which takeout restaurants are open now near you by simply typing your address in the location bar on foodpanda and pressing search. You will see all the available restaurants and shops that deliver to your area.</p>


                <br></br>
                <p style={{ fontSize: "1.2rem" }}><strong>Does foodpanda deliver 24 hours?</strong></p>

                <br></br>
                <p>Yes, foodpanda in Pakistan delivers 24 hours. However, many restaurants may be unavailable for a late-night delivery. Please check which places in Pakistan deliver to you within 24 hours by using your address. You can also order groceries 24 hours a day via pandamart.</p>


                <br></br>
                <p style={{ fontSize: "1.2rem" }}><strong>Can you pay cash for foodpanda?</strong></p>

                <br></br>
                <p>Yes, you can pay cash on delivery for foodpanda in Pakistan.</p>


                <br></br>
                <p style={{ fontSize: "1.2rem" }}><strong>How can I pay foodpanda online?</strong></p>

                <br></br>
                <p>You can pay online while ordering at foodpanda Pakistan by using a credit or debit card or PayPal.</p>

            </div>

            {/* <button onClick={data}>add data</button> */}

        </>
    )
}

export default Body;