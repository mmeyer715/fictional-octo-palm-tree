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
  Button
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Stack } from '@mui/system';


function App() {
  const [product, setProduct] = React.useState('');
  const handleChange = (event) => {
    setProduct(event.target.value)
  }

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
          <img class="responsive-img logo" src={logo} alt="City Distributions Logo" />
        </Grid>
        <Grid item>
          <Typography variant="h2" gutterBottom align="center">Thank you for using Collective Clinic!</Typography>
          <Typography variant="h4" gutterBottom align="center">We are happy to serve you!</Typography>
          <Typography variant="h5" gutterBottom align="center">Please answer the following questions so we can further assist you. Thank you!😃 </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ pt: 5, pb: 3 }}>
        <Root>
          <Divider sx={{ fontSize: 'h6.fontSize' }}>GENERAL INFORMATION</Divider>
        </Root>
      </Grid>
      <Grid container spacing={2} sx={{ p: 1 }}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              id="firstName"
              helperText="Legal First Name"
              variant="standard"
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth >
            <TextField
              id="lastName"
              helperText="Legal Last Name"
              variant="standard"
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              id="email"
              helperText="Email"
              variant="standard"
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth >
            <TextField
              id="phone"
              helperText="Phone Number"
              variant="standard"
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="standard-adornment-social">Social Security Number</InputLabel>
            <Input
              id="socialSecurity"
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
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              id="birthday"
              label="Date of Birth"
              type="date"
              variant='standard'
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            {/* <InputLabel id="productType">Select Product Type</InputLabel> */}
            <Select
              labelId="productLabel"
              id="productType"
              variant="standard"
              value={product}
              label="Select Product Type"
              onChange={handleChange}
            >
              <MenuItem value="medCard">Medical Card</MenuItem>
              <MenuItem value="medCardCult">Medical Card with Cultivation</MenuItem>
              <MenuItem value="medCardRenew">Medical Card Renewal</MenuItem>
              <MenuItem value="medCardCultRenew">Medical Card with Cultivation Renewal</MenuItem>
              <MenuItem value="cultUpgrade">Cultivation Upgrage</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ p: 1 }}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              id='licenseNum'
              label='If renewal, license number:'
              variant='standard'
            />
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="password"
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
              id="street"
              helperText="Street Address"
              variant="standard"
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              id="city"
              helperText="City"
              variant="standard"
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth >
            <TextField
              id="state"
              helperText="State"
              variant="standard"
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              id="zipcode"
              helperText="Zipcode"
              variant="standard"
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
              id="mailStreet"
              helperText="Street Address"
              variant="standard"
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              id="mailCity"
              helperText="City"
              variant="standard"
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth >
            <TextField
              id="mailState"
              helperText="state"
              variant="standard"
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              id="mailZipcode"
              helperText="Zipcode"
              variant="standard"
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
              name='langButtons'
              id="languages"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            <TextField
              id="multiLang"
              label="If yes, please list here:"
              variant='standard'
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <FormLabel>Are you currently eligible for any Missouri low-income assistance programs?</FormLabel>
            <RadioGroup
              row
              aria-labelledby='demo-radio-buttons-group-label'
              name='lowIncomeButtons'
              id="lowIncome"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            <TextField
              id="assistantPrograms"
              label="If yes, please list here:"
              variant='standard'
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <FormLabel>Do you intend to cultivate medical marijuana?</FormLabel>
            <RadioGroup
              row
              aria-labelledby='demo-radio-buttons-group-label'
              name='cultButtons'
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
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <FormLabel>Do you agree to immediately make available access to the patient cultivation facility upon request from the department?</FormLabel>
            <RadioGroup
              row
              aria-labelledby='demo-radio-buttons-group-label'
              name='cultAccessButtons'
              id="cultAccess"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
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
              name='cultSharedButtons'
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
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <FormLabel>Do you attest that the information provided in this application is true and correct?</FormLabel>
            <RadioGroup
              row
              aria-labelledby='demo-radio-buttons-group-label'
              name='trueButtons'
              id="trueInfo"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
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
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              id="cultCity"
              helperText="City"
              variant="standard"
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth >
            <TextField
              id="cultState"
              helperText="state"
              variant="standard"
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              id="cultZipcode"
              helperText="Zipcode"
              variant="standard"
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container sx={{ pt: 5, pb: 3 }}>
        <Root>
          <Divider sx={{ fontSize: 'h6.fontSize' }}>DOCUMENTS</Divider>
        </Root>
      </Grid>
      <Grid container spacing={2} sx={{ p: 1 }}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <FormLabel sx={{ mb: 3 }} htmlFor='digitalPhoto'>Digital Photo</FormLabel>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" id="digitalPhoto" />
              </Button>
            </Stack>
          </FormControl>
        </Grid>
        <Grid item xs={6} spacing={2} >
          <FormControl fullWidth>
            <FormLabel sx={{ mb: 3 }} htmlFor='governmentPhoto'>Government Issued Photo Identification Card</FormLabel>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" id="governmentId" />
              </Button>
            </Stack>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container direction="column" justifyContent="center" alignItems="center" className='subButton'>
        <Typography variant='h6'>Before submitting, please review all answers for accuracy. Thank you!</Typography>
        <Stack>

          <Button variant="contained" href="#contained-buttons">
            Submit
          </Button>
        </Stack>
      </Grid>
    </>
  );
}

export default App;
