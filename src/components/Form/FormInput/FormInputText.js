import React from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
// import { FormInputProps } from "./FormInputProps";
import FormInputDropdown from "./FormInputDropdown";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();

 const FormInputText = ({ name, control, label }) => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
  return (
      
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
        
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
          {...register('textValue')}
          error={errors.confirmPassword ? true : false}
        />
      )}
    />
  );
};
export default FormInputText