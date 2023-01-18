import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const Imageedit = (props) => {
  return (
    <Edit title='Edit Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='title' />
        <TextInput  source='body' />
        
       
        
      </SimpleForm>
    </Edit>
  )
}

export default Imageedit;