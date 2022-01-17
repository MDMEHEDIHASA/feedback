import FeedbackItem from "./FeedbackItem";
import Spinner from "./shared/Spinner";
// import PropTypes from 'prop-types'

import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";


function FeedbackList() {
    const {feedback,isLoading} = useContext(FeedbackContext)
    if(!isLoading && (!feedback || feedback.length===0)){
        return(<p>No Feedback yet.</p>)
    }
    return isLoading ? <Spinner/> : (
        <div className="feedback-list">
           {feedback.map((item)=>(
               <FeedbackItem key={item.id} item={item} ></FeedbackItem>
           ))}
        </div>
    )
}


// FeedbackList.propTypes={
//     feedback:PropTypes.arrayOf(
//         PropTypes.shape({
//             id:PropTypes.string,
//             rating:PropTypes.number,
//             text:PropTypes.string
//         })
//     )
// }

export default FeedbackList
