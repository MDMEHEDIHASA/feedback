import { useState,useContext,useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
    const {addFeedBack,feedbackEdit,updateFeedback} = useContext(FeedbackContext);

    const [text,setText] = useState('');
    const[rating,setRating] = useState(10);
    const [message,setMessage]=useState('');
    const [btndisable,setBtnDisabled]=useState(true);


    useEffect(()=>{
        if(feedbackEdit.edit === true){
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    },[feedbackEdit])

    const handleChange = (e)=>{
        if(text ===''){
            setBtnDisabled(true);
            setMessage(null);
        }else if(text !== '' && text.trim().length <=10){
            setMessage("Text must be greater than 10 character.")
        }else{
            setMessage(null);
            setBtnDisabled(false)
        }
        setText(e.target.value);
        
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(text.trim().length >10){
            const newFeedback = {
                text,
                rating
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id,newFeedback)
            }else{
                addFeedBack(newFeedback);
            }
            setText('')
            
        }
    }

    return (
        <Card>
         <form onSubmit={handleSubmit}>
             <h2>How would you rate our service?</h2>
             <RatingSelect select={(rating)=>setRating(rating)}/>
             <div className="input-group">
                 <input onChange={handleChange} type='text'  placeholder="Write a review" value={text}/>
                 <Button type='submit' isDisabled={btndisable}>Submit</Button>
             </div>
        </form>  
        {message && <div className="message">{message}</div>}
        </Card>
    )
}

export default FeedbackForm
