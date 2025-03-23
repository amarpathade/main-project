import { Link } from "react-router-dom";
 export default  function navbar  (){
 return(
    <nav className="bg-blue-600 text-white p-4">
    <Link to="/Home" className="mr-4">Home</Link>
<Link to="/About">About</Link>
</nav>
 )
 }
