import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ImageField,
} from 'react-admin'

const LinkList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <TextField source='link' />
        <ImageField source='logo' />
        <EditButton basePath='/links' />
        <DeleteButton basePath='/links' />
      </Datagrid>
    </List>
  )
}

export default LinkList;