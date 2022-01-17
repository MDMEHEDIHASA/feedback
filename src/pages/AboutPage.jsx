import Card from "../components/shared/Card"
import { Link,useLocation } from "react-router-dom"


function AboutPage({item}) {
    const location = useLocation();
    const {from} = location.state;
    
    return (
        <Card>
            <div className="about">
                <h1>About Page</h1>
                <p>This a project for leave feedback for product.{from}</p>
            </div>
           <p>
               
               <Link to='/'>Go Back</Link>
           </p>
        </Card>
    )
}

export default AboutPage
