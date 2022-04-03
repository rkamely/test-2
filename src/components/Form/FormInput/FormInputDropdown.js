// import React from "react";
// import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
// import { useFormContext, Controller } from "react-hook-form";
// // import { FormInputProps } from "./FormInputProps";

//   const options = [
//     { label: "همه", value: "همه" },
//     { label: "تغذیه زنبور", value: "تغذیه زنبور" },
//     { label: "برداشت عسل", value: "برداشت عسل" },
//     { label: "بیماری زنبور", value: "بیماری زنبور" },
//   ];

// export const FormInputDropdown= ({name,control, label}) => {

//   const generateSelectOptions = () => {
//     return options.map((option) => {
//       return (
//         <MenuItem key={option.value} value={option.value}>
//           {option.label}
//         </MenuItem>
//       );
//     });
//   };

//   return <Controller
//       control={control}
//       name={name}
//       render={({ field: { onChange, value } }) => (
//         <Select onChange={onChange} value={value}>
//           {generateSelectOptions()}
//         </Select>
//       )}
//     />
// };

////////////////////////////////////////
// import React, { useState } from "react";
// import { useFormContext, Controller } from "react-hook-form";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import InputLabel from "@material-ui/core/InputLabel";
// import { FormHelperText } from "@material-ui/core";

// // const MuiSelect = (props) => {
// //   const { label, name, options } = props;

// //   return (
// //     <FormControl fullWidth={true}>
// //       <InputLabel htmlFor={name}>{label}</InputLabel>
// //       <Select id={name} {...props}>
// //         <MenuItem value="">
// //           <em>None</em>
// //         </MenuItem>
// //         {options.map((item) => (
// //           <MenuItem key={item.id} value={item.id}>
// //             {item.label}
// //           </MenuItem>
// //         ))}
// //       </Select>
// //     </FormControl>
// //   );
// // };

// function FormInputDropdown(props) {
//   const { control } = useFormContext();
//   const[data,setData]=useState()
//   const { label, name, options, required, errorobj } = props;
//   let isError = false;
//   let errorMessage = "";
//   if (errorobj && errorobj.hasOwnProperty(name)) {
//     isError = true;
//     errorMessage = errorobj[name].message;
//   }
//     const Change=(e)=>{
//       setData(e.target.value)
//     }
//   return (
//     <React.Fragment>
//       <Controller
//       render={({ field }) => (
//                       <FormControl fullWidth={true}>
//                       <InputLabel htmlFor={name}>{label}</InputLabel>
//                       <Select id={name} {...props} 
//                       onChange={(e) => field.onChange(()=>Change(e))}
                     
//                       >
//                         <MenuItem >
//                           <em>None</em>
//                         </MenuItem>
//                         {options.map((item) => (
//                           <MenuItem key={item.id} value={item.id}>
//                             {item.label}
//                           </MenuItem>
//                         ))}
//                       </Select>
//                       <FormHelperText>{errorMessage}</FormHelperText>

//                     </FormControl>
//                     )}
  
//         control={control}
//         name={name}
//         label={label}
//         defaultValue=""
//         error={isError}
        
//         InputLabelProps={{
//           className: required ? "required-label" : "",
//           required: required || false,
//       }}
//         helperText={errorMessage}
//         {...props}
//       />
//     </React.Fragment>
//   );
// }

// export default FormInputDropdown;

///////////////////////////////////////




import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";
// import { FormInputProps } from "./FormInputProps";

const options = [
  {
    label: "Dropdown Option 1",
    value: "1",
  },
  {
    label: "Dropdown Option 2",
    value: "2",
  },
];
const FormInputDropdown = ({
  name,
  control,
  label,
}) => {
  const generateSingleOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl size={"small"}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};
export default FormInputDropdown