import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import {
  Container,
  FormLabel,
  FormControl,
  Badge,
  FormGroup,
  Button,
} from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
type FormValues = {
  pastaList: [];
  acceptTerms: boolean;
};

const pastaList = [
  'オイルソース',
  'トマトソース',
  'バジルソース',
  'ミートソース',
  'クリームソース',
  'チーズソース',
];

const QuestionnaireForm = () => {
  const [isShown, setIsShown] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const {
    register,
    clearErrors,
    resetField,
    formState: { errors },
  } = useFormContext<FormValues>();

  console.log(isDisabled);

  const checkDisabled = () => {
    setIsDisabled(!isDisabled);
    if (isDisabled) {
      resetField('pastaList');
      clearErrors('pastaList');
    }
  };

  return (
    <>
      <h4 className='pl-3'>アンケート</h4>

      <Button variant='primary' onClick={() => setIsShown(!isShown)}>
        アンケートを開く
      </Button>

      {isShown && (
        <Container className='py-3'>
          <input type='checkbox' onClick={checkDisabled} />

          {/* パスタソース */}
          <FormGroup
            className={
              errors.pastaList
                ? 'mb-3 bg-light p-2 pb-3 is-invalid'
                : 'mb-3 bg-light p-2 pb-3'
            }
          >
            <FormLabel htmlFor='code' className='fw-bold'>
              好きなパスタソースは？
            </FormLabel>
            {pastaList.map((type, index) => (
              <div
                className={
                  errors.pastaList ? 'form-check is-invalid' : 'form-check'
                }
                key={index}
              >
                <input
                  type='checkbox'
                  className={
                    errors.pastaList
                      ? 'form-check-input is-invalid'
                      : 'form-check-input'
                  }
                  disabled={isDisabled}
                  {...register('pastaList')}
                  id='radio1b'
                  value={type}
                />
                <label className='form-check-label' htmlFor='radio1b'>
                  {type}
                </label>
              </div>
            ))}

            <div className='invalid-feedback'>{errors.pastaList?.message}</div>
          </FormGroup>

          <FormGroup className='mb-3 bg-light p-2 pb-5'>
            <FormLabel className='pb-1'>
              規約チェック <Badge bg='danger text-white'>必須</Badge>
            </FormLabel>
            <Form.Check
              type='checkbox'
              {...register('acceptTerms')}
              className={
                errors.acceptTerms ? 'is-invalid text-center' : 'text-center'
              }
            />
            <FormControl.Feedback type='invalid' className='text-center pt-3'>
              {errors.acceptTerms?.message}
            </FormControl.Feedback>
          </FormGroup>
        </Container>
      )}
    </>
  );
};
export default QuestionnaireForm;
