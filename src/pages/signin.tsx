import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import IconLeftArrow from '../icons/icon-left-arrow';
import IconLogo from '../icons/icon-logo';
import { validateEmail } from '@/utils/validate-email';
import { RouterLink } from '@/components/router-link';

export interface InputType {
  email: string;
  password: string;
}

const initialValues: InputType = {
  email: '',
  password: '',
};
const initialErrorMessage: InputType = {
  email: '',
  password: '',
};

const Signin: NextPage = () => {
  const [formInput, setFormInput] = useState<InputType>(initialValues);
  const [errorMessage, setErrorMessage] = useState<InputType>(initialErrorMessage);
  const [isSubmit, setIsSumbit] = useState<boolean>(false);
  const isError = !!errorMessage.email || !!errorMessage.password;

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

  const handleSubmit = (event: React.FormEvent) => {
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
                      Don&apos;t have an account? &nbsp;
                      <Link
                        component={RouterLink}
                        href="/signup"
                        underline="hover"
                        variant="subtitle2"
                      >
                        Register
                      </Link>
                    </Typography>
                  }
                  title="Log in"
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

                <Button
                  disabled={isError || isSubmit}
                  fullWidth
                  size="large"
                  sx={{ mb: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Log In
                </Button>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Link
                    underline="hover"
                    variant="subtitle2"
                  >
                    Forgot password?
                  </Link>
                </Box>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Signin;
