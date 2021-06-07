// ./src/components/forms/user-profile/form-model/validation-schema.js

// External package dependencies.
import * as Yup from 'yup';

// Local imports
import { formModel } from 'components/forms/user-profile/form-model';
import { FAVORITES_SETTINGS } from 'components/forms/user-profile/settings';

const {
  formField: {
    user_name, picture_url, email_address, phone_number,
    city, state, self_gender, seeking_gender, movies
  }, genderValues, stateValues
} = formModel;

const { MOVIE_LIMIT } = FAVORITES_SETTINGS;

const pictureRegEx = /^https?:\/\/.*\.(jpe?g|png|gif)$/i;
const phoneRegEx = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

const validationSchema = [
  Yup.object().shape({
    [user_name.name]: Yup.string()
      .min(3, 'A minimum of 3 characters is required.')
      .max(30, 'Maximum allowed characters is 40.')
      .required(`${user_name.required_err_msg}`),
    [picture_url.name]: Yup.string()
      .url(`${picture_url.url_err_msg}`)
      .matches(pictureRegEx, picture_url.url_err_msg)
      .required(`${user_name.required_err_msg}`),
    [email_address.name]: Yup.string()
      .email('Please enter a valid email address.')
      .required(`${email_address.required_err_msg}`),
    [phone_number.name]: Yup.string()
      .nullable()
      .matches(phoneRegEx, phone_number.format_err_msg)
      .required(`${phone_number.required_err_msg}`),
    [city.name]: Yup.string()
      .max(30, 'Maximum allowed characters is 40.')
      .required(`${city.required_err_msg}`),
     [state.name]: Yup.string()
      .oneOf(stateValues.map((state) => state.value))
      .required(`${city.required_err_msg}`),
    [self_gender.name]: Yup.string()
      .oneOf(genderValues.map((gender) => gender.value))
      .required(`${city.required_err_msg}`),
    [seeking_gender.name]: Yup.string()
      .oneOf(genderValues.map((gender) => gender.value))
      .required(`${seeking_gender.required_err_msg}`)
  }),
  Yup.object().shape({
    [movies.name]: Yup.array()
      .min(MOVIE_LIMIT)
  })
];

export default validationSchema;
