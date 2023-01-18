import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        
        <TextField source='name' />
        <TextField source='feedback' />
        <EditButton basePath='/feedback' />
        <DeleteButton basePath='/feedback' />
      </Datagrid>
    </List>
  )
}

export default PostList