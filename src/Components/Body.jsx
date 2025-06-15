// this component has Search, banner, product List, product Details in it
import Search from "./Search"
import Banner from "./Banner"
import {Link} from 'react-router-dom'
const Body = () =>{
    return (
        <>
        <Search/>
        <Banner/>
        <h3>This is a body</h3>
        <Link to='/AboutUs'>About Us</Link>
        </>
    )
}

export default Body