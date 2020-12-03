import { GET_CONTACTS_FAIL, GET_CONTACTS_LOAD, GET_CONTACTS_SUCCESS, 
    TOGGLE_TRUE, TOGGLE_FALSE, GET_CONTACT} from '../Constants/Constants';
import axios from 'axios';

export const getcontacts=()=>async(dispatch)=>{
     dispatch ({type:GET_CONTACTS_LOAD})
     try {
         let result=await axios.get("/api/contact/");
         dispatch ({type:GET_CONTACTS_SUCCESS, payload:result.data.response});
     } catch (error) {
        dispatch ({type:GET_CONTACTS_FAIL, payload:error});
        console.log(error)
     }
    
}

export const deleteContact=(id)=>(dispatch)=>{
    
    axios.delete(`/api/contact/${id}`).then((res)=>dispatch(getcontacts()))
    .catch((err)=>console.log(err))
         
}

//edit
export const toggleTrue=()=>{
    return{
        type:TOGGLE_TRUE
    }
}
export const toggleFalse=()=>{
    return{
        type:TOGGLE_FALSE
    }
}

export const getContact=(id)=>(dispatch)=>{
    
    axios.get(`/api/contact/${id}`).then((res)=>dispatch({type:GET_CONTACT, payload:res.data.response}))
    .catch((err)=>console.log(err))
         
}

export const postContact=(user)=>(dispatch)=>{
    axios.post("/api/contact/", user).then((res)=>dispatch(getcontacts()))
    .catch((err)=>console.log(err))
}

export const editContact=(id,user)=>(dispatch)=>{
    axios.put(`/api/contact/${id}`, user)
    .then((res)=>dispatch(dispatch(getcontacts())))
    .catch((err)=>console.log(err))
}

