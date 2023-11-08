import FoodpandaFooter from "../Images/foodpanda-grey-footer.png"
import Facebook from "../Images/facebook.png"
import Instagram from "../Images/instagram.png"

const Footer = () => {

    return (

        <>
            <div>
                <div>
                    <hr style={{ marginLeft: "100px", width: "90%", marginTop: "20px", marginBottom: "20px" }} />
                </div>

                <div>
                    <img src={FoodpandaFooter} style={{ marginLeft: "130px", width: "270px", height: "50px" }} />

                    <img src={Facebook} style={{ marginLeft: "65%", width: "45px", height: "50px" }}></img>
                    <img src={Instagram} style={{ marginLeft: "10px", width: "45px", height: "54px" }}></img>

                </div>

                <div>
                    <hr style={{ marginLeft: "100px", width: "90%", marginTop: "20px", marginBottom: "20px" }} />
                </div>

                <div style={{ display: "flex" }}>
                    <p style={{ marginLeft: "130px", width: "10%", marginTop: "20px", marginBottom: "20px" }}>© 2023 foodpanda</p>

                    <p style={{ marginLeft: "130px", width: "20%", marginTop: "20px", marginBottom: "20px" }}>Press Help Center Refunds with pandapay Pandapay User Account Terms and Conditions Terms and conditions Privacy policy Security Download foodpanda Apps</p>

                    <p style={{ marginLeft: "60px", width: "20%", marginTop: "20px", marginBottom: "20px" }}>Careers Suggest a restaurant Corporate Customer Cashback Terms and Conditions All cuisines foodpanda Magazine Partner with us pandago - Request a rider foodpanda Vouchers&Promo</p>

                    <p style={{ marginLeft: "60px", width: "20%", marginTop: "20px", marginBottom: "20px" }}>All cities Update on COVID-19 in Pakistan pandamart Grocery Delivery pandapro - monthly subscription programme foodpanda home chef Become an affiliate Ramzan deals</p>

                </div>

                <div>
                    <hr style={{ marginLeft: "100px", width: "90%", marginTop: "20px", marginBottom: "20px" }} />
                </div>

                <div style={{ display: "flex" }}>

                    <p style={{ marginLeft: "130px", width: "14%", marginTop: "20px", marginBottom: "20px" }}><strong>Kababjees - Clifton, Broadway Pizza - DHA, Roll Inn, Chop Chop Wok, Pizza Hut - Khayaban E Shahbaz, Kababjees - Johar</strong></p>

                    <p style={{ marginLeft: "60px", width: "20%", marginTop: "20px", marginBottom: "20px" }}><strong>Pizza Hut - Faisal Town, Karachi Hot N Spicy - DHA, Burger Lab - Lahore, The Rice Bowl, Tikka House, Balochi Sajji by Bundu Khan</strong></p>

                    <p style={{ marginLeft: "60px", width: "20%", marginTop: "20px", marginBottom: "20px" }}><strong>McDonald's - Park, Pizza Hut, Petit Burgger, Cock N Bull, Mr Cod Banni Galla, China Town</strong></p>

                    <p style={{ marginLeft: "60px", width: "20%", marginTop: "20px", marginBottom: "20px" }}><strong>KFC - Bahria Pindi, Pizza Hut - Bahria Phase 4, Chillies Restaurant, Crunchy's - Qasim Market, Granny's, Pizza Mania Lazar</strong></p>

                </div>

            </div>
        </>
    )
}

export default Footer;