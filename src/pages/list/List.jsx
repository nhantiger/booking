import "./list.css";
import Navbar from '../../components/navbar/Navbar';
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {format}from "date-fns"
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
const List = () =>{
    const locations=useLocation();
    const[destination,setDestination]=useState(locations.state.destination)
    const[date,setDate]=useState(locations.state.date)
    const[opendDate,setOpenDate]=useState(false)
    const[options,setOptions]=useState(locations.state.options)
    return(
        <div>
        <Navbar/>
        <Header type="list"/>
        <div className="listContainer">
            <div className="listWrapper">
                <div className="listSearch">
                    <h1 className="lsTitle">Search</h1>
                    <div className="lsItem">
                        <label htmlFor="">Destiantions</label>
                        <input type="text" name="" id="" placeholder={destination}/>
                    </div>
                    <div className="lsItem">
                        <label htmlFor="">Check-in Date</label>
                        <span onClick={()=>setOpenDate(!opendDate)}> {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                       {opendDate&& (<DateRange onChange={(item)=>setDate([item.selection])} minDate={new Date()}
                        ranges={date}/>)}
                    </div>
                    <div className="lsItem">
                        <label htmlFor="">Options</label>
                        <div className="lsOptionItem">
                            <span className="lsOptionText">
                                Min price <small>per night</small>
                            </span>
                            <input type="number" name="" id="" className="lsOptionInput" />
                             
                        </div>
                        <div className="lsOptionItem">
                            <span className="lsOptionText">
                                Max price <small>per night</small>
                            </span>
                            <input type="number" name="" id="" className="lsOptionInput" />
                             
                        </div>
                        <div className="lsOptionItem">
                            <span className="lsOptionText">
                                Adult
                            </span>
                            <input min={1} type="number" name="" id="" className="lsOptionInput" placeholder={options.adult}/>
                             
                        </div>
                        <div className="lsOptionItem">
                            <span className="lsOptionText">
                                Children
                            </span>
                            <input min={0} type="number" name="" id="" className="lsOptionInput" placeholder={options.children}/>
                             
                        </div>
                        <div className="lsOptionItem">
                            <span className="lsOptionText">
                               Room
                            </span>
                            <input min={1} type="number" name="" id="" className="lsOptionInput" placeholder={options.room}/>
                             
                        </div>
                    </div>
                    <button class="custom-btn btn-16">Search</button>
                </div>
                <div className="listResult">
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                </div>
            </div>
        </div>
        </div>
    )
}
export default List

