import "./navbar.css";

const Homes=()=>{
    window.location='http://localhost:3000/'
}
const Home = () =>{
    return(
        <div className="navbar">
            <div className="navContainer">
                <label className="logo" onClick={Homes}>BOOKING.com
                </label>
                <div className="navItems">
                    <button className="navButton nav1 ">Register</button>
                    <button className="navButton ">Login</button>
                </div>
            </div>
        </div>
    )
}
export default Home
