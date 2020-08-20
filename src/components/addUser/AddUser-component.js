import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import { v4 as uuid } from 'uuid';
import {
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Button } from 'reactstrap';


export const AddUser = () => {
  const [name, setName] = useState('');
  const { addUser } = useContext(GlobalContext);

  const history = useHistory();

  const onSubmit = (e) => {    const newUser = {
      id: uuid(),
      name
    }

    addUser(newUser)
    history.push('/');
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit} >
      <FormGroup>
        <Label>Name</Label>
        <Input 
          type='text' 
          placeholder='Enter Name'
          value={name}          
          onChange={onChange}
          >
        </Input>
      </FormGroup>
      <Button type='submit'>Submit</Button>
      <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
    </Form>
  )
}
