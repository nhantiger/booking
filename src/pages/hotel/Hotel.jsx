import Header from "../../components/header/Header";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown, faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

const Hotel = () =>{
    const[slideNumber,setSlideNumber]=useState(0);
    const[open,setOpen]=useState(false);
    const photo = [
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/360196708.jpg?k=cd4afdf3f223345f14a901ea4235f0447a73130add9f83ff6278a241572a6d16&o=&hp=1"
           
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/273953720.jpg?k=1616c91ded82f8eefbfa8972ede945d2ead71105c5b82ef69f8c895c335e4e57&o=&hp=1"
           
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/360196719.jpg?k=51cf84fcafd849cb5f28b1f0e64f2a53d966d7e53561b988faffcbb027a27cc7&o=&hp=1"
           
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/221427680.jpg?k=e7849194d6f2baeed4fef67e3a95318d8effeaa29b0cd8ae8cde2bbe0094f8eb&o=&hp=1"
           
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/360198615.jpg?k=2a4eea101f17270bb9560465826fe9e997a93b2ec0858885685802b62d3da8f9&o=&hp=1"
           
        },
        {   src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/258090488.jpg?k=da89c28cf075a08bd7e355f251b1232afacbeef812ef6ff5862ff27f9de922e8&o=&hp=1"
           
        },
        // {   src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/360196708.jpg?k=cd4afdf3f223345f14a901ea4235f0447a73130add9f83ff6278a241572a6d16&o=&hp=1"
           
        // },
        // {   src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/253722493.jpg?k=4631ae70af4ce1f73df5731c1b224e594ae546df7c0612bb543823b296cff092&o=&hp=1"
           
        // },
];
    const handleOpen=(i)=>{
        setSlideNumber(i);
        setOpen(true);
    }
  
    const handleMove=(directions)=>{
        let newSlideNumber;
        if (directions) {
            newSlideNumber=slideNumber===0?5:slideNumber-1;
        }else{
            newSlideNumber=slideNumber===5?0:slideNumber+1;
        }
        setSlideNumber(newSlideNumber)
    }

    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)} />    
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={photo[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow"onClick={()=>handleMove("r")}/>
                </div>}
                <div className="hotelWrapper">
                    <button className="booknow ">
                        <span>Resreve or Book Now!</span>
                        </button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Elton St 125 New york</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent locaition - 500m from center
                    </span>
                    <span className="hotelPriceHigthLight">
                        Book a stay over $114 at this property and get and free airport taxi
                    </span>
                    <div className="hotelImg">
                        {photo.map((photo,i)=>(<div className="hotelImgWarpper">
                            <img  onClick={(()=>handleOpen(i))} src={photo.src} alt="" className="hotelImg" />
                        </div>))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="holtelTitle">Stay in the heart of Krakow</h1>
                            <p className="hotelDesc">
                            You are eligible for Genius discount at Vung Tau Melody Apartment! To save at this property, simply sign in.

Located in Vung Tau, less than 1 km from Back Beach and 1.8 km from Front Beach, Vung Tau Melody Apartment offers air-conditioned accommodation with mountain views and free WiFi.

The apartment has a terrace, city views, a seating area, a flat-screen TV with satellite channels, a fully equipped kitchen area with a fridge and a microwave, and an attached bathroom. shower and free toiletries. Each unit has a balcony with river views.

Pineapple Beach is 2.7 km from Vung Tau Melody Apartment, while Nghinh Phong Cape is 2.4 km away. The nearest airport is Vung Tau Airport, 5 km from the property.

Couples especially like the location — they rate it 8.9 for a two-person stay.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Prefect for a 9-night stay !</h1>
                            <span>
                            Top location: Highly rated by recent guests (8.7 points)
                            </span>
                            <h2><b>$95</b>(9 night)</h2>
                            <button className="booknow1"><span></span>Reserve or Book Now !</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <br />
                <Footer/>
            </div>
        </div>
    )
}
export default Hotel