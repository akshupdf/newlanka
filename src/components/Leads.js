import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const Leadset = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        
        <TextField source='name' />
        <EmailField source='feedback' />
        <EditButton basePath='/feedback' />
        <DeleteButton basePath='/feedback' />
      </Datagrid>
    </List>
  )
}

export default Leadset;