import React from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from "react-hook-form";
import FormInput from './CustomTextField';

const AddressForm = () => {
    const methods = useForm();

  return (
     <>
      <Typography variant='h6' gutterBottom>Shipping Address</Typography>
      <FormProvider {...methods} >
          <form onSubmit=''> 
              <Grid container spacing={3}>
                <FormInput required name='firstName' label='first Name' ></FormInput>
                <FormInput required name='lastname' label='Last Name' ></FormInput>
                <FormInput required name='address1' label='Address 1' ></FormInput>
                <FormInput required name='address2' label='Address 2' ></FormInput>
                <FormInput required name='email' label='Email' ></FormInput>
                <FormInput required name='city' label='City' ></FormInput>
                <FormInput required name='zip' label='Zip Code' ></FormInput>
                {/* <Grid item xs={12} sm={6}>
                  <InputLabel>Shipping Country</InputLabel>
                </Grid> */}
              </Grid>
          </form>
      </FormProvider>
      </>
  )
}  

export default AddressForm