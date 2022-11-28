import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col } from 'react-bootstrap';

import { FormSchema } from '../Schemas/formSchema';

import UserForm from './userForm';
import QuestionnaireForm from './questionnaireForm';
import CreditCardForm from './creditCardForm';

type FormValues = {
  name: string;
  email: string;
  tel: number;
};

const ParentForm = () => {
  const methods = useForm({
    resolver: yupResolver(FormSchema),
    mode: 'onChange',
  });
  const onSubmit = (data: Object) => alert(JSON.stringify(data));
  return (
    <>
      <FormProvider {...methods}>
        <form
          className='container mt-5'
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <UserForm />
          {/* <QuestionnaireForm /> */}
          <CreditCardForm />
          <Col className='text-center mb-5'>
            <Button variant='danger' size='lg' type='submit'>
              内容を送信する
            </Button>
          </Col>
        </form>
      </FormProvider>
    </>
  );
};
export default ParentForm;
