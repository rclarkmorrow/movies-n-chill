// ./src/components/form/user-profile/components/profile-form.jsx

// External package dependencies.
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { Form, Formik, } from 'formik';
import {
  Box, Grid, Button, CircularProgress, Step,
  StepLabel, Stepper, Typography,
} from '@material-ui/core';

// Local imports.
import { currentUserSelector } from 'store';
import { Error404 } from 'components';
import { FORM_SETTINGS } from 'components/forms/user-profile/settings';
import { validationSchema } from 'components/forms/user-profile/form-model';
import {
  DetailsForm, MovieSearchForm, StepperWrapper,
} from 'components/forms/user-profile/components';
import {
  createUserProfile, editUserProfile,
  fetchCurrentUser
} from 'store';

 // Set up form steps.
 const { FORM_STEPS } = FORM_SETTINGS;
 const _renderStepContent = (step) => {
  switch (step) {
    case 0:
      return <DetailsForm />
    case 1:
      return <MovieSearchForm />
    default:
      return <Error404 />
  };
};

const ProfileForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { FORM_EDIT_TITLE, FORM_SIGN_UP_TITLE } = FORM_SETTINGS;
  const { getAccessTokenSilently, user } = useAuth0();
  const { currentUser } = useSelector(currentUserSelector);
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === FORM_STEPS.length - 1;
  const _handleSubmit = async(values, actions) => {
    if (isLastStep) {
      const token = await getAccessTokenSilently();
        if (currentUser) {
          console.log("last step")
          const { user_id } = currentUser;
          dispatch(editUserProfile({token, values, user_id }));
          history.push('/profile');
        } else {
          dispatch(createUserProfile({ token, values }));
          const { sub } = user;
          dispatch(fetchCurrentUser({ sub, token }));
          history.push('/profile');
        }
      } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    };
  };

  const _handleBack = () => {
    setActiveStep(activeStep -1);
  };

  return(
    <>
      <Box mt={2} mb={2}>
        <Typography variant="h5">
          {currentUser ? FORM_EDIT_TITLE : FORM_SIGN_UP_TITLE}
        </Typography>
      </Box>
      <StepperWrapper>
        <Stepper activeStep={activeStep}>
          {FORM_STEPS.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </StepperWrapper>
      <>
          <Formik
            initialValues={{
              auth0_id: `${user.sub.split('|')[1].trim()}`,
              picture_url: currentUser ? `${currentUser.picture_url}` : '',
              user_name: currentUser ? `${currentUser.user_name}` : '',
              self_gender: currentUser ? `${currentUser.self_gender}` : '',
              seeking_gender: currentUser ? `${currentUser.seeking_gender}` : '',
              email_address: currentUser ? `${currentUser.email_address}` : '',
              phone_number: currentUser ? `${currentUser.phone_number}` : '',
              city: currentUser ? `${currentUser.city}` : '',
              state: currentUser ? `${currentUser.state}` : '',
              movies: currentUser ? currentUser.movies : null
            }}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
          {({ isSubmitting, values }) => (
          <Form id="profileForm"
            // onKeyDown={keyEvent => {keyEvent.keycode === 13 && keyEvent.preventDefault()}}
          >
            <Grid container>
              <Grid item xs={12}>
                <Box mb={5}>
                  {_renderStepContent(activeStep, currentUser)}
                </Box>
              </Grid>
            <Grid item xs={1} />
            <Grid item xs={5} align="left">
              <Box mb={10}>
                {activeStep !== 0 && (
                  <Button onClick={_handleBack}>
                    Back
                  </Button>
                )}
              </Box>
            </Grid>
            <Grid item xs={5} align="right">
              <Box mb={10}>
                <Button
                  disabled={
                    isSubmitting ||
                    ((isLastStep && values.movies &&
                        values.movies.length !== 10)
                      || (isLastStep && !values.movies))
                  }
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  {isLastStep ? 'Finish' : 'Next'}
                </Button>
                {isSubmitting && (
                  <CircularProgress
                    size={24}
                  />
                )}
              </Box>
            </Grid>
            <Grid item xs={1} />
            </Grid>
          </Form>
          )}
          </Formik>
      </>
    </>
  );
};

export default ProfileForm;
