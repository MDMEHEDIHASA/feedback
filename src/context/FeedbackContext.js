import {createContext,useState,useEffect} from 'react'


const FeedbackContext = createContext();


export const FeedbackProvider = ({children})=>{
    //value ---> state,funciton
    const[isLoading,setisLoading]= useState(true);
    const [feedback,setFeedBackData] = useState([]);
    
    const [feedbackEdit,setFeedbackEdit] = useState({
        item:{},
        edit:false
    });
    
    useEffect(()=>{
        fetchFeedback();
    },[])

    //fetch feedback
    const fetchFeedback = async()=>{
        const response = await fetch(`/feedback?_sort=id&order=desc`);
        const data = await response.json();
        setFeedBackData(data);
        setisLoading(false);
    }

    //delete feedback item
    const deleteFeedBack = async(id)=>{
        
        if(window.confirm('Are you sure you want to delete?')){
            await fetch(`/feedback/${id}`,{method:"DELETE"})
          setFeedBackData(feedback.filter((item)=>{
            return item.id !== id;
          }))
        }
      }

    //Add feedback item
    const addFeedBack = async(newFeedback)=>{
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
          });
          const data = await response.json();
        setFeedBackData([data,...feedback]);
        //console.log(feedBckData);
      }


    const editFeedback = (item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }
    //update feed fack
    const updateFeedback = async(id,updateItem)=>{
        const response = await fetch(`/feedback/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(updateItem),
        })
        const data = await response.json();
        setFeedBackData(feedback.map((item)=>item.id === id ? {...item,...data} : item))
        
    }

    return(
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedBack,
            addFeedBack,
            editFeedback,
            feedbackEdit,
            updateFeedback,
            isLoading
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}


export default FeedbackContext;