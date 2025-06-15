// basic header with brand name, log and Cart button

import { Link } from "react-router-dom"
const Header = () =>{
    return <>
    <h1>Canoopi</h1>
    <Link to="/">Home</Link>
    </>
}

export default Header