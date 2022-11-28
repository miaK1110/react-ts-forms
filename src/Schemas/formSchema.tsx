import * as yup from 'yup';
import { setLocale } from 'yup';

const localeJP = {
  mixed: {
    notType: '${path} ',
  },
};

setLocale(localeJP);

export const FormSchema = yup.object().shape({
  name: yup
    .string()
    .max(50, '名前項目で入力できるのは50文字までです')
    .required('名前は入力必須です'),
  email: yup
    .string()
    .max(254, 'メールアドレスで入力できるのは254文字までです')
    .email('メールアドレスの形式が正しくありません')
    .required('メールアドレスは入力必須です'),
  tel: yup
    .number()
    .typeError('半角数字でお願いします')
    .required('電話番号は入力必須です')
    .label('電話番号は半角数字でご入力ください'),
  postcode: yup.string().required('郵便番号は入力必須です'),
  pref: yup.string().required('都道府県は入力必須です'),
  address1: yup.string().required('この項目は入力必須です'),
  address2: yup.string().required('この項目は入力必須です'),
  avatar: yup
    .mixed()
    .test('required', 'ファイルを選択してください', (value) => {
      return value && value.length;
    })
    .test('fileSize', 'ファイルのサイズが大きすぎます', (value, context) => {
      return value && value[0] && value[0].size <= 1000000;
    })
    .test(
      'type',
      '選択できるファイルの形式はjpeg,jpg,pngのみです',
      function (value) {
        return (
          (value && value[0] && value[0].type === 'image/jpeg') || 'imag/png'
        );
      }
    ),
  pastaList: yup.array().min(1, '1つ以上選択してください'),
  acceptTerms: yup.bool().oneOf([true], 'チェックをいれてください'),
  creditCardNumber: yup
    .number()
    .typeError('半角数字でお願いします')
    .required('クレジットカード番号は入力必須です')
    .label('クレジットカード番号は半角数字でご入力ください'),

  creditCardGivenName: yup
    .string()
    .max(50, '名前項目で入力できるのは50文字までです')
    .required('名前は入力必須です'),

  creditCardFamilyName: yup
    .string()
    .max(50, '名前項目で入力できるのは50文字までです')
    .required('名前は入力必須です'),
  creditCardExpMonth: yup.string().max(2).required('入力必須です'),
  creditCardExpYear: yup.string().max(4).required('入力必須です'),
  creditCardCvv: yup
    .number()
    .positive('セキュリティコードは半角数字でご入力ください')
    .typeError('半角数字でお願いします')
    .max(5)
    .required('セキュリティコードは入力必須です')
    .label('セキュリティコードは半角数字でご入力ください'),
});
