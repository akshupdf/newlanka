import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ImageField,
} from 'react-admin'

const Minilist = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <ImageField source='link' />
        <EditButton basePath='/mini' />
        <DeleteButton basePath='/mini' />
      </Datagrid>
    </List>
  )
}

export default Minilist;