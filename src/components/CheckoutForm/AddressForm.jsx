import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./FormInput";
import { commerce } from "../../lib/commerce";

const AddressForm = ({ checkoutToken }) => {
  // States for shipping options
  const [shippingCoutries, setShippingCountries] = useState([]);
  const [shippingCoutry, setShippingCountry] = useState("");

  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");

  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const methods = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const response = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    console.log(response.countries);
    setShippingCountries(response.countries);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit="">
          <Grid container spacing={3}>
            <FormInput name="firstName" label="First name" />
            <FormInput name="lastName" label="Last name" />
            <FormInput name="address1" label="Address" />
            <FormInput name="email" label="Email" />
            <FormInput name="city" label="City" />
            <FormInput name="zip" label="ZIP / Post code" />
            {/* <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                value={shippingCoutries[0]}
                fullWidth
                onChange={"onChange"}
              >
                <MenuItem key={"loop"} value={"value"}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid> */}
            {/* <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={} fullWidth onChange={}>
                  <MenuItem key={'loop'} value={}>
                    Select Me
                  </MenuItem>
              </Select>
            </Grid> */}
            {/* <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={} fullWidth onChange={}>
                  <MenuItem key={'loop'} value={}>
                    Select Me
                  </MenuItem>
              </Select>
            </Grid> */}
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
