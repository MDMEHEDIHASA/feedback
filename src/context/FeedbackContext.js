import {createContext,useState} from 'react'
import FeedbackData from '../data/FeedbackItem';
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();


export const FeedbackProvider = ({children})=>{
    //value ---> state,funciton
    const [feedback,setFeedBackData] = useState(FeedbackData);

    const [feedbackEdit,setFeedbackEdit] = useState({
        item:{},
        edit:false
    })

    const deleteFeedBack = (id)=>{
        if(window.confirm('Are you sure you want to delete?')){
          setFeedBackData(feedback.filter((item)=>{
            return item.id !== id;
          }))
        }
      }

    const addFeedBack = (newFeedback)=>{
        //setFeedBackData([...feedBckData,...newFeedback]);
        newFeedback.id = uuidv4();
        setFeedBackData([newFeedback,...feedback]);
        //console.log(feedBckData);
      }


    const editFeedback = (item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    const updateFeedback = (id,updateItem)=>{
        setFeedBackData(feedback.map((item)=>item.id === id ? {...item,...updateItem} : item))
        
    }

    return(
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedBack,
            addFeedBack,
            editFeedback,
            feedbackEdit,
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}


export default FeedbackContext;