import { useParams,Route,Switch,BrowserRouter as Router } from "react-router-dom";
import {Redirect} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

function Post() {
    const params = useParams();
    const history = useHistory();
    const status = 200;
    if(status === 400){
        return <Redirect to='/notfound'/>
    }
    const handleClick= ()=>{
        history.push('/');
    }
    return (
        <div>
            <h1>Post Params id= {params.id}</h1>
            <h1>Post Params name = {params.name}</h1>
            <button  onClick={handleClick}> click me</button>
            {/* <Switch>
            <Router>
            <Route  path='/show' component={<h1>Hello Shows</h1>}></Route>
            </Router>
            </Switch> */}
            
            
        </div>
    )
}

export default Post
