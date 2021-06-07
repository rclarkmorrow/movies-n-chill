// ./src/components/forms/user-profile/form-model/form-model.js

const formModel = {
  formId: 'userProfileForm',
  formField: {
    user_name: {
      name: 'user_name',
      label: 'User name*',
      required_err_msg: 'User name is required',
    },
    picture_url: {
      name: 'picture_url',
      label: 'Profile picture URL*',
      url_err_msg: 'Please enter a full URL that links to a .jp(e)g, .png or .gif file ' +
                   'including http or https',
      required_err_msg: 'A URL to a profile picture is required',
    },
    email_address: {
      name: 'email_address',
      label: 'Email address*',
      required_err_msg: 'Email address is required',
    },
    phone_number: {
      name: 'phone_number',
      label: 'Phone number',
      format_err_msg: 'Phone number should be 9 numbers, dashes are added automatically.'
    },
    city: {
      name: 'city',
      label: 'City*',
      required_err_msg: 'City is required',
    },
    state: {
      name: 'state',
      label: 'State*',
      required_err_msg: 'State is required',
    },
    self_gender: {
      name: 'self_gender',
      label: 'Gender*',
      required_err_msg: 'Gender is required'
    },
    seeking_gender: {
      name: 'seeking_gender',
      label: 'I am interested in*',
      required_err_msg: 'This field is required'
    },
    movies: {
      name: 'movies',
      label: 'Favorite Movies',
      required_err_msg: 'You must select 10 favorite movies.'
    }

  },
  genderValues: [
    {value: 'Female', label: 'Female'},
    {value: 'Male', label: 'Male'},
    {value: 'Other', label: 'Other'},
  ],
  seekingGenderValues: [
      {value: 'Female', label: 'Women'},
      {value: 'Male', label: 'Men'},
      {value: 'Other', label: 'Other'}
  ],
  stateValues: [
    { value: 'AL', label: 'Alabama'},
    { value: 'AK', label: 'Alaska'},
    { value: 'AZ', label: 'Arizona'},
    { value: 'AR', label: 'Arkansas'},
    { value: 'CA', label: 'California'},
    { value: 'CO', label: 'Colorado'},
    { value: 'CT', label: 'Connecticut'},
    { value: 'DE', label: 'Delaware'},
    { value: 'DC', label: 'District of Columbia'},
    { value: 'FL', label: 'Florida'},
    { value: 'GA', label: 'Georgia'},
    { value: 'HI', label: 'Hawaii'},
    { value: 'ID', label: 'Idaho'},
    { value: 'IL', label: 'Illinois'},
    { value: 'IN', label: 'Indiana'},
    { value: 'IA', label: 'Iowa'},
    { value: 'KS', label: 'Kansas'},
    { value: 'KY', label: 'Kentucky'},
    { value: 'LA', label: 'Louisiana'},
    { value: 'ME', label: 'Maine'},
    { value: 'MD', label: 'Maryland'},
    { value: 'MA', label: 'Massachusetts'},
    { value: 'MI', label: 'Michigan'},
    { value: 'MN', label: 'Minnesota'},
    { value: 'MS', label: 'Mississippi'},
    { value: 'MO', label: 'Missouri'},
    { value: 'MT', label: 'Montana'},
    { value: 'NE', label: 'Nebraska'},
    { value: 'NV', label: 'Nevada'},
    { value: 'NH', label: 'New Hampshire'},
    { value: 'NJ', label: 'New Jersey'},
    { value: 'NM', label: 'New Mexico'},
    { value: 'NY', label: 'New York'},
    { value: 'NC', label: 'North Carolina'},
    { value: 'ND', label: 'North Dakota'},
    { value: 'OH', label: 'Ohio'},
    { value: 'OK', label: 'Oklahoma'},
    { value: 'OR', label: 'Oregon'},
    { value: 'PA', label: 'Pennsylvania'},
    { value: 'RI', label: 'Rhode Island'},
    { value: 'SC', label: 'South Carolina'},
    { value: 'SD', label: 'South Dakota'},
    { value: 'TN', label: 'Tennessee'},
    { value: 'TX', label: 'Texas'},
    { value: 'UT', label: 'Utah'},
    { value: 'VT', label: 'Vermont'},
    { value: 'VA', label: 'Virginia'},
    { value: 'WA', label: 'Washington'},
    { value: 'WV', label: 'West Virginia'},
    { value: 'WI', label: 'Wisconsin'},
    { value: 'WY', label: 'Wyoming'},
  ],
};

export default formModel;
