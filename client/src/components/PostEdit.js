import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput, EmailField } from 'react-admin'

const PostEdit = (props) => {
  return (
    <Edit title='Edit Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='Number' />
        <TextInput source='text1' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Edit>
  )
}

export default PostEdit
