import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const LinkEdit = (props) => {
  return (
    <Edit title='Edit Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput  source='link' />
        <TextInput source='logo' />
       
        
      </SimpleForm>
    </Edit>
  )
}

export default LinkEdit;