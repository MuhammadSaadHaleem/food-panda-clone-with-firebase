import Nabar from "../components/Navbar";
import Panda from "../Images/panda.png"
import Card from "../components/Card";
import Burger from "../Images/burger.jpg"
import Islamabad from "../Images/Islamabad.jpg"
import Faisalabad from "../Images/Faisalabad.jpg"
import { getRestaurant } from "../config/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import DashBoardCard from "../components/DashboardCard";
import './Dashboard.css'



export function Dashboard() {

    const [restroData, setRestroData] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        getData()

    }, [])

    const getData = async () => {
        const data = await getRestaurant()
        console.log('data----->', data)
        setRestroData(data)
    }
    return (

        <div>
            <Nabar />
            <>

                <div className="container">

                    <div className="container-1">

                        <div className="abc1">

                            <p>Food and groceries delivery from ڪراچي Karachi’s best restaurants and shops</p>
                        </div>

                        <div className="abc">
                            <img src={Panda}></img>
                        </div>
                    </div>

                </div>

                <div className="container-2">
                    <div className="abc2">
                        <p>Saaray restaurants</p>
                    </div>
                    <div className="citycard" style={{ flexWrap: "wrap" }} >

                        {restroData.map(item => {
                            return <DashBoardCard data={item} image={item.image_url} onClick={() => navigate(`/detailPage/${item.id}`)} />

                            // <Card data={item}  image={item.image_url}  onClick={()=> navigate(`/detailPage/${item.id}`)}/>
                        })}


                        {/* <Card image={Burger}  />
                    <Card image={Burger}  />
                    <Card image={Faisalabad}  /> */}


                    </div>
                </div>

            </>

            <Footer />

        </div>

    )

}