// ./src/components/forms/user-profile/components/details-form.jsx

// External package dependencies.
import React from 'react';
import { Box, Grid } from  '@material-ui/core';
import { useFormikContext } from 'formik';

// Local imports.
import { formModel } from 'components/forms/user-profile/form-model';
import {
  InputField, InputFieldWithAvatar, SelectField
} from 'components/forms/fields';

const DetailsForm = () => {
  const { setFieldValue } = useFormikContext();
  const {
    formField, stateValues, genderValues, seekingGenderValues,
  } = formModel;
  const {
    user_name, picture_url, email_address,
    phone_number, city, state, self_gender,
    seeking_gender,
  } = formField


  const formatPhoneNumber = (phoneNumberFieldValue) => {
    if (!phoneNumberFieldValue) return phoneNumberFieldValue;
    const phoneNumber = phoneNumberFieldValue.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3,6)}-${phoneNumber.slice(6, 10)}`;
  }

  const handlePhoneInput = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setFieldValue('phone_number', formattedPhoneNumber);
  }

  return (
    <Box mt ={2} ml={5} mr={5}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Box mb={3}>
            <InputField
              name={user_name.name}
              label={user_name.label}
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box mb={3}>
            <InputFieldWithAvatar
              name={picture_url.name}
              label={picture_url.label}
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box mb={3}>
            <InputField
              name={email_address.name}
              label={email_address.label}
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box mb={3}>
            <InputField
              name={phone_number.name}
              label={phone_number.label}
              fullWidth
              onChange={handlePhoneInput}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box mb={3}>
            <InputField name={city.name} label={city.label} fullWidth />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Box mb={3}>
              <SelectField
                name={state.name}
                label={state.label}
                data={stateValues}
                fullWidth
              />
            </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box mb={3}>
            <SelectField
              name={self_gender.name}
              label={self_gender.label}
              data={genderValues}
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box mb={3}>
            <SelectField
              name={seeking_gender.name}
              label={seeking_gender.label}
              data={seekingGenderValues}
              fullWidth
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )

}

export default DetailsForm;
