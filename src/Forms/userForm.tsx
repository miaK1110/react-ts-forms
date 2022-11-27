import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

import {
  Container,
  FormControl,
  FormLabel,
  Badge,
  Col,
  Row,
} from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
type FormValues = {
  name: string;
  email: string;
  tel: number;
  postcode: string;
  pref: string;
  address1: string;
  address2: string;
  avatar: string;
};

const UserForm = () => {
  const {
    register,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useFormContext<FormValues>();

  const getAddress = async (newpostcode: string) => {
    const response = await fetch(
      `https://api.zipaddress.net/?zipcode=${newpostcode}`,
      {
        method: 'GET',
        mode: 'cors',
      }
    );
    return response.json();
  };

  useEffect(() => {
    if (watch('postcode')) {
      let newAddress = watch('postcode');
      getAddress(newAddress)
        .then((res) => {
          console.log(res);
          console.log('render');
          setValue('pref', res.data?.pref);
          setValue('address1', res.data?.address);
        })
        .catch((err) => console.log(err));
    }
  }, [watch('postcode')]);

  console.log(watch('address1'));

  return (
    <>
      <h4 className='pl-3'>お客様情報</h4>

      <Container className='py-3'>
        {/* 名前 */}
        <Form.Group className='mb-3 bg-light p-2 pb-3'>
          <FormLabel className='pb-1'>
            お名前 <Badge bg='danger text-white'>必須</Badge>
          </FormLabel>
          <FormControl
            type='text'
            autoComplete='name'
            className={errors.name ? 'is-invalid w-75' : 'w-75'}
            placeholder='例：テスト 太郎'
            defaultValue=''
            {...register('name')}
          />
          <FormControl.Feedback type='invalid'>
            {errors.name?.message}
          </FormControl.Feedback>
        </Form.Group>

        {/* メールアドレス */}
        <Form.Group className='mb-3 bg-light p-2 pb-3'>
          <FormLabel htmlFor='email' className='fw-bold pb-1'>
            メールアドレス <Badge bg='danger text-white'>必須</Badge>
          </FormLabel>
          <FormControl
            type='email'
            autoComplete='email'
            placeholder='例:example@example.com'
            defaultValue=''
            {...register('email')}
            className={errors.email ? 'is-invalid' : ''}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>
        {/* 電話番号 */}
        <Form.Group className='mb-3 bg-light p-2 pb-3'>
          <FormLabel htmlFor='tel' className='fw-bold pb-1'>
            電話番号 <Badge bg='danger text-white'>必須</Badge>
          </FormLabel>
          <FormControl
            type='tel'
            autoComplete='tel'
            placeholder='例:000-000-0000'
            defaultValue=''
            {...register('tel')}
            className={errors.tel ? 'is-invalid w-75' : 'w-75'}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.tel?.message}
          </Form.Control.Feedback>
        </Form.Group>
        {/* 住所 */}
        <Form.Group className='mb-3 bg-light p-2 pb-3'>
          <FormLabel className='fw-bold pb-1 mb-3'>
            ご住所 <Badge bg='danger text-white'>必須</Badge>
          </FormLabel>
          <Row>
            {/* 郵便番号 */}
            <Col>
              <FormLabel>郵便番号(半角数字)</FormLabel>
              <FormControl
                type='text'
                autoComplete='postal-code'
                className={errors.postcode ? 'is-invalid w-full' : 'w-full'}
                id='postcode'
                placeholder='例:000-0000'
                defaultValue=''
                {...register('postcode')}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.postcode?.message}
              </Form.Control.Feedback>
            </Col>
            {/* 都道府県 */}
            <Col>
              <FormLabel>都道府県</FormLabel>
              <select
                autoComplete='address-level1'
                defaultValue=''
                {...register('pref')}
                className={
                  errors.pref
                    ? 'form-select w-full is-invalid'
                    : 'form-select w-full'
                }
              >
                <option value=''>--</option>
                <option value='北海道'>北海道</option>
                <option value='青森県'>青森県</option>
                <option value='岩手県'>岩手県</option>
                <option value='宮城県'>宮城県</option>
                <option value='秋田県'>秋田県</option>
                <option value='山形県'>山形県</option>
                <option value='福島県'>福島県</option>
                <option value='茨城県'>茨城県</option>
                <option value='栃木県'>栃木県</option>
                <option value='群馬県'>群馬県</option>
                <option value='埼玉県'>埼玉県</option>
                <option value='千葉県'>千葉県</option>
                <option value='東京都'>東京都</option>
                <option value='神奈川県'>神奈川県</option>
                <option value='新潟県'>新潟県</option>
                <option value='富山県'>富山県</option>
                <option value='石川県'>石川県</option>
                <option value='福井県'>福井県</option>
                <option value='山梨県'>山梨県</option>
                <option value='長野県'>長野県</option>
                <option value='岐阜県'>岐阜県</option>
                <option value='静岡県'>静岡県</option>
                <option value='愛知県'>愛知県</option>
                <option value='三重県'>三重県</option>
                <option value='滋賀県'>滋賀県</option>
                <option value='京都府'>京都府</option>
                <option value='大阪府'>大阪府</option>
                <option value='兵庫県'>兵庫県</option>
                <option value='奈良県'>奈良県</option>
                <option value='和歌山県'>和歌山県</option>
                <option value='鳥取県'>鳥取県</option>
                <option value='島根県'>島根県</option>
                <option value='岡山県'>岡山県</option>
                <option value='広島県'>広島県</option>
                <option value='山口県'>山口県</option>
                <option value='徳島県'>徳島県</option>
                <option value='香川県'>香川県</option>
                <option value='愛媛県'>愛媛県</option>
                <option value='高知県'>高知県</option>
                <option value='福岡県'>福岡県</option>
                <option value='佐川県'>佐賀県</option>
                <option value='長崎県'>長崎県</option>
                <option value='熊本県'>熊本県</option>
                <option value='大分県'>大分県</option>
                <option value='宮崎県'>宮崎県</option>
                <option value='鹿児島県'>鹿児島県</option>
                <option value='沖縄県'>沖縄県</option>
              </select>
              <Form.Control.Feedback type='invalid'>
                {errors.pref?.message}
              </Form.Control.Feedback>
            </Col>
          </Row>
          {/* 市町村区～番地 */}
          <div className='mt-3 mb-3'>
            <FormLabel>市町村区～番地</FormLabel>
            <FormControl
              type='text'
              autoComplete='address-level2'
              placeholder='例：テスト区テスト丁目１−２'
              defaultValue=''
              {...register('address1')}
              className={errors.address1 ? 'is-invalid' : ''}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.address1?.message}
            </Form.Control.Feedback>
          </div>
          {/* 建物名～号室項目 */}
          <div className='mt-3 mb-3'>
            <FormLabel>建物名～号室</FormLabel>
            <FormControl
              type='text'
              autoComplete='address-line1'
              placeholder='例：テストマンション〇号室'
              defaultValue=''
              {...register('address2')}
              className={errors.address2 ? 'is-invalid' : ''}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.address2?.message}
            </Form.Control.Feedback>
          </div>
        </Form.Group>
        {/* アバター画像 */}
        <Form.Group className='mb-3 bg-light p-2 pb-3'>
          <FormLabel htmlFor='tel' className='fw-bold pb-1'>
            プロフィール画像
          </FormLabel>
          <Form.Control
            type='file'
            accept='.jpg,.jpeg,.png'
            defaultValue=''
            {...register('avatar')}
            className={errors.avatar ? 'is-invalid w-75' : 'w-75'}
          />
          <Form.Control.Feedback type='invalid'>
            {watch('avatar') && errors.avatar?.message}
          </Form.Control.Feedback>
        </Form.Group>
      </Container>
    </>
  );
};
export default UserForm;
