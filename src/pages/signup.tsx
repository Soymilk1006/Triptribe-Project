import type { NextPage } from 'next';

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

import IconLeftArrow from '../icons/icon-left-arrow';
import IconLogo from '../icons/icon-logo';
import { validateEmail } from '@/utils/validate-email';
import { InputType } from './signin';
import { RouterLink } from '@/components/router-link';

interface SignupInputType extends InputType {
  confirmPassword: string;
}

const initialValues: SignupInputType = {
  email: '',
  password: '',
  confirmPassword: '',
};
const initialErrorMessage: SignupInputType = {
  email: '',
  password: '',
  confirmPassword: 'Please enter same password',
};

const Signup: NextPage = () => {
  const [formInput, setFormInput] = useState<SignupInputType>(initialValues);
  const [checked, setChecked] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<SignupInputType>(initialErrorMessage);
  const [isSubmit, setIsSumbit] = useState<boolean>(false);
  const isError =
    !!errorMessage.email ||
    !!errorMessage.password ||
    formInput.confirmPassword !== formInput.password ||
    !checked;

  const checkEmail = () => {
    if (formInput.email === initialValues.email) {
      return;
    }
    if (!validateEmail(formInput.email)) {
      setErrorMessage((prev) => {
        return {
          ...prev,
          email: 'Please enter a valid email address',
        };
      });
    } else {
      setErrorMessage((prev) => {
        return {
          ...prev,
          email: '',
        };
      });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleBlur = () => {
    checkEmail();
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSumbit(true);
  };

  useEffect(() => {
    checkEmail();
  }, [formInput.email]);

  return (
    <>
      <Box sx={{ display: 'flex', mb: 15, ml: 5 }}>
        <IconLogo />
        <Typography sx={{ ml: 1, fontSize: 20, fontWeight: 500 }}>TripTribe</Typography>
      </Box>
      <Grid
        container
        justifyContent="center"
      >
        <Grid
          item
          xs={4}
        >
          <Box
            sx={{
              p: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', pb: 2 }}>
              <IconLeftArrow />
              <Link
                underline="hover"
                variant="subtitle2"
              >
                <Typography
                  variant="body1"
                  sx={{ ml: 1, fontWeight: 500, color: 'black' }}
                >
                  Back
                </Typography>
              </Link>
            </Box>

            <Card
              elevation={16}
              sx={{ padding: 6, borderRadius: 5 }}
            >
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <CardHeader
                  sx={{ p: 0, mb: 5 }}
                  subheader={
                    <Typography
                      color="text.secondary"
                      variant="body2"
                    >
                      Already have an account? &nbsp;
                      <Link
                        component={RouterLink}
                        href="/signin"
                        underline="hover"
                        variant="subtitle2"
                      >
                        Log in
                      </Link>
                    </Typography>
                  }
                  title="Register"
                />

                <TextField
                  sx={{ mb: 3 }}
                  fullWidth
                  label="Email Address"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={formInput.email}
                  error={!!errorMessage.email}
                  helperText={errorMessage.email}
                />

                <TextField
                  sx={{ mb: 3 }}
                  fullWidth
                  label="Password"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={formInput.password}
                />

                <TextField
                  sx={{ mb: 3 }}
                  fullWidth
                  label="Password Confirmation"
                  name="confirmPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={formInput.confirmPassword}
                  error={formInput.confirmPassword !== formInput.password}
                  helperText={
                    formInput.confirmPassword !== formInput.password && errorMessage.confirmPassword
                  }
                />
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    ml: -1,
                    mb: 3,
                  }}
                >
                  <Checkbox
                    checked={checked}
                    name="terms"
                    onChange={(event) => setChecked(event.target.checked)}
                  />
                  <Typography
                    color="text.secondary"
                    variant="body2"
                  >
                    I have read the{' '}
                    <Link
                      component="a"
                      href="#"
                    >
                      Terms and Conditions
                    </Link>
                  </Typography>
                </Box>

                <Button
                  disabled={isError || isSubmit}
                  fullWidth
                  size="large"
                  sx={{ mb: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                ></Box>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
