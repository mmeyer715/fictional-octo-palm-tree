import { 
  useMutation 
} from '@apollo/client';
import { useState } from 'react';
import './App.css';
import * as React from 'react';
import logo from './assets/cdlogo.png';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Input,
  Grid,
  TextField,
  styled,
  Divider,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Button,
  Container
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Stack } from '@mui/system';

import { ADD_ANSWERS } from './utils/mutations';

function App() {
  const [addAnswers, { error }] = useMutation(ADD_ANSWERS);

  const [answersData, setAnswersData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    socialSecurity: '',
    birthday: '',
    licenseNum: '',
    password: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    mailStreet: '',
    mailCity: '',
    mailState: '',
    mailZipcode: '',
    multiLang: '',
    // assistantPrograms: '',
    // cultAreaDescript: '',
    // cultAccess: '',
    // cultivationShared: '',
    // trueInfo: '',
    // cultStreet: '',
    // cultCity: '',
    // cultState: '',
    // cultZipcode: '',
    // // digitalPhoto: '',
    // // governmentId: ''
  })

  const handleChange = event => {
    const { name, value } = event.target;

    setAnswersData({
      ...answersData,
      [name]: value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addAnswers({
        variables: { ...answersData }
      });
      console.log(data);
    } catch (e) {
      console.log(e);
    }

    setAnswersData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      socialSecurity: '',
      birthday: '',
      licenseNum: '',
      password: '',
      street: '',
      city: '',
      state: '',
      zipcode: '',
      mailStreet: '',
      mailCity: '',
      mailState: '',
      mailZipcode: '',
      multiLang: '',
      // assistantPrograms: '',
      // cultAreaDescript: '',
      // cultAccess: '',
      // cultivationShared: '',
      // trueInfo: '',
      // cultStreet: '',
      // cultCity: '',
      // cultState: '',
      // cultZipcode: '',
      // // digitalPhoto: '',
      // // governmentId: '',
    })
  }

  // const [product, setProduct] = React.useState('');
  // const handleProductChange = (event) => {
  //   setProduct(event.target.value)
  // }

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [showSocial, setShowSocial] = React.useState(false);

  const handleClickShowSocial = () => setShowSocial((show) => !show);

  const handleMouseDownSocial = (event) => {
    event.preventDefault();
  };

  const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + not(style)': {
      marginTop: theme.spacing(2),
    },
  }));

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <img className="responsive-img logo" src={logo} alt="City Distributions Logo" />
        </Grid>
        <Grid item>
          <Typography variant="h2" gutterBottom align="center">Thank you for using Collective Clinic!</Typography>
          <Typography variant="h4" gutterBottom align="center">We are happy to serve you!</Typography>
          <Typography variant="h5" gutterBottom align="center">Please answer the following questions so we can further assist you. Thank you!😃 </Typography>
        </Grid>
      </Grid>
      <form onSubmit={handleFormSubmit}>
        <Grid container sx={{ pt: 5, pb: 3 }}>
          <Root>
            <Divider sx={{ fontSize: 'h6.fontSize' }}>GENERAL INFORMATION</Divider>
          </Root>
        </Grid>
        <Grid container spacing={2} sx={{ p: 1 }}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                helperText="Legal First Name"
                variant="standard"
                name="firstName"
                value={answersData.firstName}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth >
              <TextField
                helperText="Legal Last Name"
                variant="standard"
                name="lastName"
                value={answersData.lastName}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                helperText="Email"
                variant="standard"
                name="email"
                value={answersData.email}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth >
              <TextField
                helperText="Phone Number"
                variant="standard"
                name="phone"
                value={answersData.phone}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth variant="standard">
              <InputLabel htmlFor="standard-adornment-social">Social Security Number</InputLabel>
              <Input
                type={showSocial ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label="toggle social security visibility"
                      onClick={handleClickShowSocial}
                      onMouseDown={handleMouseDownSocial}
                    >
                      {showSocial ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                name="socialSecurity"
                value={answersData.socialSecurity}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                label="Date of Birth"
                type="date"
                variant='standard'
                InputLabelProps={{
                  shrink: true,
                }}
                name="birthday"
                value={answersData.birthday}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ p: 1 }}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                label='If renewal, license number:'
                variant='standard'
                name="licenseNum"
                value={answersData.licenseNum}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                name="password"
                value={answersData.password}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container sx={{ pt: 5, pb: 3 }}>
          <Root>
            <Divider sx={{ fontSize: 'h6.fontSize' }}>RESIDENTIAL ADDRESS</Divider>
          </Root>
        </Grid>
        <Grid container spacing={2} sx={{ p: 1 }}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                helperText="Street Address"
                variant="standard"
                name="street"
                value={answersData.street}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField                helperText="City"
                variant="standard"
                name="city"
                value={answersData.city}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth >
              <TextField
                helperText="State"
                variant="standard"
                name="state"
                value={answersData.state}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                helperText="Zipcode"
                variant="standard"
                name="zipcode"
                value={answersData.zipcode}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container sx={{ pt: 5, pb: 3 }}>
          <Root>
            <Divider sx={{ fontSize: 'h6.fontSize' }}>MAILING ADDRESS</Divider>
          </Root>
        </Grid>
        <Grid container spacing={2} sx={{ p: 1 }}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                helperText="Street Address"
                variant="standard"
                name="mailStreet"
                value={answersData.mailStreet}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                helperText="City"
                variant="standard"
                name="mailCity"
                value={answersData.mailCity}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth >
              <TextField
                helperText="state"
                variant="standard"
                name="mailState"
                value={answersData.mailState}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                helperText="Zipcode"
                variant="standard"
                name="mailZipcode"
                value={answersData.mailZipcode}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container sx={{ pt: 5, pb: 3 }}>
          <Root>
            <Divider sx={{ fontSize: 'h6.fontSize' }}>QUESTIONS</Divider>
          </Root>
        </Grid>
        <Grid container spacing={5} sx={{ p: 1 }}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <FormLabel id="languages">Do you speak a language other than English?</FormLabel>
              <RadioGroup
                row
                aria-labelledby='demo-radio-buttons-group-label'
                id="languages"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
              <TextField
                id="multiLang"
                label="If yes, please list here:"
                variant='standard'
                name="multiLang"
                value={answersData.multiLang}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <FormLabel>Are you currently eligible for any Missouri low-income assistance programs?</FormLabel>
              <RadioGroup
                row
                aria-labelledby='demo-radio-buttons-group-label'
                id="lowIncome"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
              <TextField
                id="assistantPrograms"
                label="If yes, please list here:"
                variant='standard'
                name="assistantPrograms"
                value={answersData.assistantPrograms}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <FormLabel>Do you intend to cultivate medical marijuana?</FormLabel>
              <RadioGroup
                row
                aria-labelledby='demo-radio-buttons-group-label'
                id="cultivation"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
              <FormLabel>If yes, provide a detailed description of your secured cultivation area, how you plan to secure your cultivation area, and who will have access to the cultivation area to ensure your description meets the following requirements pursuant to 19 CSR 30-95.010. </FormLabel>
              <TextField
                id="cultAreaDescript"
                multiline
                helperText="Names of patients and caregivers having access to the cultivation should be listed in the cultivation description. If the cultivation space will be shared with others cultivating they should be listed in the shared cultivation section below."
                variant='standard'
                name="cultAreaDescript"
                value={answersData.cultAreaDescript}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <FormLabel>Do you agree to immediately make available access to the patient cultivation facility upon request from the department?</FormLabel>
              <RadioGroup
                row
                aria-labelledby='demo-radio-buttons-group-label'
                id="cultAccess"
              >
                <FormControlLabel
                  control={<Radio name="cultAccess" value={answersData.cultAccess}
                  onChange={handleChange} />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <FormLabel>Will this cultivation facility be shared?</FormLabel>
              <RadioGroup
                row
                aria-labelledby='demo-radio-buttons-group-label'
                id="cultShared"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
              <TextField
                id="cultivationShared"
                label="Patient/Caregiver Details"
                helperText="Name and License Number of Patient/Caregiver"
                variant='standard'
                name="cultivationShared"
                value={answersData.cultivationShared}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <FormLabel>Do you attest that the information provided in this application is true and correct?</FormLabel>
              <RadioGroup
                row
                aria-labelledby='demo-radio-buttons-group-label'
                id="trueInfo"
              >
                <FormControlLabel
                  control={<Radio name="trueInfo"
                  value={answersData.trueInfo}
                  onChange={handleChange}/>} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>

            </FormControl>
          </Grid>

        </Grid>
        <Grid container spacing={2} sx={{ p: 1 }}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="cultStreet"
                label="Cultivation Address"
                helperText="Street Address"
                variant="standard"
                name="cultStreet"
                value={answersData.cultStreet}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                id="cultCity"
                helperText="City"
                variant="standard"
                name="cultCity"
                value={answersData.cultCity}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth >
              <TextField
                id="cultState"
                helperText="state"
                variant="standard"
                name="cultState"
                value={answersData.cultState}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                id="cultZipcode"
                helperText="Zipcode"
                variant="standard"
                name="cultZipcode"
                value={answersData.cultZipcode}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container sx={{ pt: 5, pb: 3 }}>
          <Root>
            <Divider sx={{ fontSize: 'h6.fontSize' }}>DOCUMENTS</Divider>
          </Root>
        </Grid>
        {/* <Grid container spacing={2} sx={{ p: 1 }}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <FormLabel sx={{ mb: 3 }} htmlFor='digitalPhoto'>Digital Photo</FormLabel>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" component="label">
                  Upload
                  <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    id="digitalPhoto"
                    name="digitalPhoto"
                    value={answersData.digitalPhoto}
                    onChange={handleChange} />
                </Button>
              </Stack>
            </FormControl>
          </Grid>
          <Grid container spacing={2} sx={{ p: 1 }} >
            <FormControl fullWidth>
              <FormLabel sx={{ mb: 3 }} htmlFor='governmentPhoto'>Government Issued Photo Identification Card</FormLabel>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" component="label">
                  Upload
                  <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    id="governmentId"
                    name="governmentId"
                    value={answersData.governmentId}
                    onChange={handleChange}
                  />
                </Button>
              </Stack>
            </FormControl>
          </Grid>
        </Grid> */}
        <Grid container direction="column" justifyContent="center" alignItems="center" className='subButton'>
          <Typography variant='h6'>Before submitting, please review all answers for accuracy. Thank you!</Typography>
          <Stack>

            <Button variant="contained" type='submit' >
              Submit
            </Button>
          </Stack>
        </Grid>
      </form>
    </>
  );
}

export default App;
