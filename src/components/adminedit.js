import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const Adminedit = (props) => {
  return (
    <Edit title='Edit Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='username' />
        <TextInput  source='password' />
        
      </SimpleForm>
    </Edit>
  )
}

export default Adminedit;