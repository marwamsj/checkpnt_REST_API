import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import {useDispatch} from 'react-redux';
import {deleteContact, getContact, toggleTrue} from '../JS/Actions/Actions'
import { Link } from 'react-router-dom';


const Contact = ({contact}) => {
  const dispatch = useDispatch()
    return (
        <div style={{padding:"2%"}}>
        <Card >
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://www.iconspng.com/images/add-contact-icon/add-contact-icon.jpg'
        />
        <Card.Header>{contact.name}</Card.Header>
        <Card.Meta>{contact.email}</Card.Meta>
        <Card.Description>
          <strong>{contact.phone}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Link to={`/edit/contact._id`}>
          <Button style={{width: 131}} inverted color='green' onClick={()=>{dispatch(getContact(contact._id));dispatch(toggleTrue())}}>
            Edit
          </Button>
          </Link>
          <Button inverted color='red' onClick={()=>dispatch(deleteContact(contact._id))}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
    </div>
    )
}

export default Contact
