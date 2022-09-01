import React from 'react'
import { Create, SimpleForm, TextInput,DateInput } from 'react-admin'

const UserCreate = (props) => {
  return (
    <Create title='Create a User' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='Phone number' />
        <TextInput multiline  source='text1' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Create>
  )
}

export default UserCreate
