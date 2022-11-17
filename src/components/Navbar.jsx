import { Link } from 'react-router-dom';


function Navbar() {

    return(
        <div className="navbar navbar-dark bg-primary mb-3">
            <h1>LAB - WikiCountries</h1>
        
            <nav>
                <Link className="navbar-brand" to="/">Home</Link>
            </nav>
        </div>
    )

}



export default Navbar