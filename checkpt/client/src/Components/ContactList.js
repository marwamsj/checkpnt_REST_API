import React, { useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { getcontacts } from '../JS/Actions/Actions';
import Contact from './Contact';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const ContactList = () => {
    
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contactReducer.contacts);
    const loadContacts = useSelector((state) => state.contactReducer.loadContacts);
    

    useEffect(() => {
        dispatch(getcontacts());
    },[]);
    return (
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}} >
            {loadContacts? (
            <Segment>
            <Dimmer active inverted>
              <Loader inverted content='Loading' />
            </Dimmer>
            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
          </Segment>
            ):(contacts.map(el=>
              <Contact key={el._id} contact={el}/>))}
        </div>
    )
}

export default ContactList
