import {  GET_CONTACT, GET_CONTACTS_FAIL,
     GET_CONTACTS_LOAD, GET_CONTACTS_SUCCESS, TOGGLE_FALSE, TOGGLE_TRUE } from '../Constants/Constants';

const InitialState = {
    contacts: [],
    loadContacts:false,
    errors: null,
    edit:false,
    user:{},
    
};
 export const contactReducer=(state=InitialState,{type,payload})=>{
     switch (type) {
         case GET_CONTACTS_LOAD: return {...state,loadContacts:true};
         case GET_CONTACTS_SUCCESS: return {...state,contacts:payload,loadContacts:false};
         case GET_CONTACTS_FAIL: return {...state,loadContacts:false, errors:payload};
         case TOGGLE_TRUE: return {...state,edit:true}
         case TOGGLE_FALSE : return {...state,edit:false}
         case GET_CONTACT: return {...state,user:payload}
        
         default:
             return state
     }
 }