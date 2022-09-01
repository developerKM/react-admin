import React from 'react'
import { Create, SimpleForm, TextInput, DateInput, EmailField } from 'react-admin'

const PostCreate = (props) => {
  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='Phone number' />
        <TextInput multiline source='text1' />
        <DateInput label='Published' source='publishedAt' />  
      </SimpleForm>
    </Create>
  )
}

export default PostCreate
