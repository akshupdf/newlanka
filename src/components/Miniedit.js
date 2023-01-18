import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const Miniedit = (props) => {
  return (
    <Edit title='Edit Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput  source='link' />
        
       
        
      </SimpleForm>
    </Edit>
  )
}

export default Miniedit;