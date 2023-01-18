import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const LeadsEdit = (props) => {
  return (
    <Edit title='Edit Feedback' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='feedback' />
        
      </SimpleForm>
    </Edit>
  )
}

export default LeadsEdit;