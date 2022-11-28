import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import {
  Container,
  FormLabel,
  FormControl,
  Badge,
  Row,
  Col,
} from 'react-bootstrap';

type FormValues = {
  creditCardNumber: number;
  creditCardGivenName: string;
  creditCardFamilyName: string;
  creditCardExpMonth: number;
  creditCardExpYear: number;
  creditCardCvv: number;
};

const CreditCardForm = () => {
  const {
    register,
    clearErrors,
    resetField,
    formState: { errors },
  } = useFormContext<FormValues>();

  return (
    <>
      <h4 className='pl-3'>クレジットカード情報</h4>

      <Container className='py-3'>
        {/* クレジットカード番号 */}
        <Form.Group className='mb-3 bg-light p-2 pb-3'>
          <FormLabel className='pb-1'>
            クレジットカード番号 <Badge bg='danger text-white'>必須</Badge>
          </FormLabel>
          <FormControl
            type='number'
            autoComplete='cc-number'
            className={errors.creditCardNumber ? 'is-invalid w-75' : 'w-75'}
            placeholder='例：111111111111111'
            defaultValue=''
            {...register('creditCardNumber')}
          />
          <FormControl.Feedback type='invalid'>
            {errors.creditCardNumber?.message}
          </FormControl.Feedback>
        </Form.Group>

        {/* 名義(名) */}
        <Form.Group className='mb-3 bg-light p-2 pb-3'>
          <FormLabel htmlFor='email' className='fw-bold pb-1'>
            カード名義(名) <Badge bg='danger text-white'>必須</Badge>
          </FormLabel>
          <FormControl
            type='text'
            autoComplete='cc-given-name'
            placeholder='例:Mia'
            defaultValue=''
            {...register('creditCardGivenName')}
            className={errors.creditCardGivenName ? 'is-invalid' : ''}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.creditCardGivenName?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* 名義(姓) */}
        <Form.Group className='mb-3 bg-light p-2 pb-3'>
          <FormLabel htmlFor='email' className='fw-bold pb-1'>
            カード名義(姓) <Badge bg='danger text-white'>必須</Badge>
          </FormLabel>
          <FormControl
            type='text'
            autoComplete='cc-family-name'
            placeholder='例:King'
            defaultValue=''
            {...register('creditCardFamilyName')}
            className={errors.creditCardFamilyName ? 'is-invalid' : ''}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.creditCardFamilyName?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* カードの有効期限 */}
        <Form.Group className='mb-3 bg-light p-2 pb-3'>
          <FormLabel htmlFor='email' className='fw-bold pb-1'>
            カード有効期限 <Badge bg='danger text-white'>必須</Badge>
          </FormLabel>
          <div className='d-flex'>
            <div>
              <select
                autoComplete='cc-exp-month'
                defaultValue=''
                {...register('creditCardExpMonth')}
                className={
                  errors.creditCardExpMonth
                    ? 'form-select w-full is-invalid'
                    : 'form-select w-full'
                }
              >
                <option value=''>--</option>
                <option value='01'>01</option>
                <option value='02'>02</option>
                <option value='03'>03</option>
                <option value='04'>04</option>
                <option value='05'>05</option>
                <option value='06'>06</option>
                <option value='07'>07</option>
                <option value='08'>08</option>
                <option value='09'>09</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
              </select>
              <Form.Control.Feedback type='invalid'>
                {errors.creditCardExpMonth?.message}
              </Form.Control.Feedback>
            </div>
            &nbsp;&nbsp;月&nbsp;&nbsp;/&nbsp;&nbsp;20&nbsp;&nbsp;
            <div>
              <select
                autoComplete='cc-exp-year'
                defaultValue=''
                {...register('creditCardExpYear')}
                className={
                  errors.creditCardExpYear
                    ? 'form-select w-full is-invalid'
                    : 'form-select w-full'
                }
              >
                <option value=''>--</option>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
                <option value='2024'>2024</option>
                <option value='2025'>2025</option>
                <option value='2026'>2026</option>
                <option value='2027'>2027</option>
                <option value='2028'>2028</option>
                <option value='2029'>2029</option>
                <option value='2030'>2030</option>
                <option value='2031'>2031</option>
                <option value='2032'>2032</option>
              </select>
              年
              <Form.Control.Feedback type='invalid'>
                {errors.creditCardExpYear?.message}
              </Form.Control.Feedback>
            </div>
          </div>
        </Form.Group>

        {/* カードCVV */}
        <Form.Group className='mb-3 bg-light p-2 pb-3'>
          <FormLabel htmlFor='email' className='fw-bold pb-1'>
            セキュリティコード <Badge bg='danger text-white'>必須</Badge>
          </FormLabel>
          <FormControl
            type='number'
            autoComplete='cc-csc'
            placeholder='例:000'
            defaultValue=''
            {...register('creditCardCvv')}
            className={errors.creditCardCvv ? 'is-invalid' : ''}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.creditCardCvv?.message}
          </Form.Control.Feedback>
        </Form.Group>
      </Container>
    </>
  );
};
export default CreditCardForm;
