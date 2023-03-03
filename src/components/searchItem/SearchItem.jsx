import "./searchItem.css"
const products =()=>{
    window.location="http://localhost:3000/hotels/sdf";
};
const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/285631841.webp?k=0c62d28a1956898f6f3fe2c391f425cba6e758a6d202630441159980773a1487&o=&s=1" alt="" className="siImg" />
    <div className="siDesc">
        <h1 className="siTitle">Tower street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubTitle">
            Studio Aparment with Air conditioning
        </span>
        <span className="siFeature">
            Entiro studio . 1 bathroom . 21m2 full bed
        </span>
        <span className="siCancelOP">Free Cancellation</span>
        <span className="siCancelOpSubtitel">
            You can caner later, so lock in this great price today!
        </span>

    </div>
    <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailText">
            <span className="siPrice">
                123 $
            </span>
            <span className="siTaxOP">
                Include Taxes and Fees
            </span>
            <button onClick={products} className="siCheckButton">
                See Availability
            </button>
        </div>
    </div>
    </div>
  )
}

export default SearchItem