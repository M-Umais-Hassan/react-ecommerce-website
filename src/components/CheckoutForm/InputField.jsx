import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const InputField = ({ name, label }) => {
    const {control} = useFormContext();
    return (
        <Grid item xs={12} sm={6}>
            <Controller
                as={TextField}
                control={control}
                defaultValue=""
                fullWidth
                name={name}
                label={label}
                required
            />
        </Grid>
    )
}

export default InputField
