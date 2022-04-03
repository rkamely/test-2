





// const useStyles = makeStyles({
//     Button: {
//       marginTop: "8px",
//       fontFamily: "Shabnam",
//       cursor: "pointer",
//     },
//   });
//   const FILE_SIZE = 1000*1000;
//       const SUPPORTED_FORMATS = [
//         "image/jpg",
//         "image/jpeg",
//         "image/gif",
//         "image/png"
//       ];
//       const validationSchema = yup.object({
//     name:yup
//     .string('Enter your name')
//     .min(2, 'name should be of minimum 2 characters length')
//     .required('name is required'),
//     email: yup
//       .string('Enter your email')
//       .email('Enter a valid email')
//       .required('Email is required'),
//     password: yup
//       .string('Enter your password')
//       .min(8, 'Password should be of minimum 8 characters length')
//       .required('Password is required'),
//     videoFile: yup
//       .mixed()
//       .required("لطفا یک فایل انتخاب کنید")
//       // .test(
//       //   "type",
//       //   "We only support jpeg",
//       //   (value) => !value || (value && value[0].type === "image/png")
        
//       // )
//       .test(
//         "fileFormat",
//         "این فرمت از فایل پشتیبانی نمیشود",
//         value => value && SUPPORTED_FORMATS.includes(value?.type)
//       )
  
//       .test(
//         "fileSize",
//         "قایل انتخابی حجم زیادی دارد",
//         (value) => {
//           console.log("vlaue",value?.size)
//           return value && value?.size <= FILE_SIZE
//         }
//       )
      
//   });
  