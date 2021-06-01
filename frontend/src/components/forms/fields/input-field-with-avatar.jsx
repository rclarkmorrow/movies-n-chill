// ./src/components/forms/fields/input-field-with-avatar.jsx

import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  Avatar, Box,
  Grid, TextField
} from '@material-ui/core';

const InputFieldWithAvatar = (props) => {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: avatarURL } = field;

  const  _renderHelperText = () => {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
    }
  }

  return (
    <Grid container justify="space-around" alignItems="center">
        <Grid item xs={1}>
          <Avatar
            alt={`User picture preview`}
            src={avatarURL}
          />
        </Grid>
        <Grid item xs={11}>
          <Box ml={4}>
            <TextField
                type="text"
                error={meta.touched && meta.error && true}
                helperText={_renderHelperText()}
                {...field}
                {...rest}
            />
          </Box>
        </Grid>
    </Grid>
  );
}

export default InputFieldWithAvatar;
