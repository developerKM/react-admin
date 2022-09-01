import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  DateField
} from 'react-admin'

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <EmailField source='Phone number' />
        <TextField source='text1' />
        <DateField source='publishedAt' /> 
        <EditButton basePath='/users' />
        <DeleteButton basePath='/users' />
      </Datagrid>
    </List>
  )
}

export default UserList
