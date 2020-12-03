import React, {useEffect, useState} from 'react';
import { Button, Form } from 'semantic-ui-react';
import {useSelector} from 'react-redux'
import { editContact, postContact } from '../JS/Actions/Actions';
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';

const Add = () => {
    const dispatch = useDispatch()
    const [user, setUser] = useState({name:"",email:"",phone:""});
    const contactRed = useSelector(state => state.contactReducer.user);
    
    const edit = useSelector(state => state.contactReducer.edit);
    
    
    useEffect(() => {
        edit?setUser(contactRed):setUser({name:"",email:"",phone:""})
    }, [edit,contactRed])
    
    const handlecontact=()=>{
        
        if (!edit) {
            dispatch(postContact(user))
            
        }else{
            dispatch(editContact(contactRed._id,user))
            
        }
        
    }
    const handlechange=(e)=>{
        e.preventDefault();
        setUser({...user,[e.target.name]:e.target.value})
    }
    return (
        <div style={{textAlign: "center"}}> 
            <Form unstackable >
                <div style={{margin: "4% 0 0 33%"}}>
                <Form.Group widths={2}>
                    <Form.Input value={user.name} label='Name(*)' placeholder='Full name' name="name" onChange={handlechange} />
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input value={user.email} label='Email(*)' placeholder='Email' name="email" onChange={handlechange}/>
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input value={user.phone} label='Phone' placeholder='Phone number' name="phone" onChange={handlechange}/>
                </Form.Group>
                </div>
                <h5 style={{color:"red"}}>(*): Required Field</h5>
                <Link to="/">
                <Button  inverted color='green' type='submit' onClick={handlecontact} >{edit?"Edit":"Save"}</Button>
                </Link>
            </Form>
        </div>
    )
}

export default Add
