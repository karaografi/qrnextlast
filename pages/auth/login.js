import { useState } from 'react';

import { Button ,TextField,Grid,CssBaseline,Box, Typography} from '@mui/material';
import { signIn, getCsrfToken } from 'next-auth/react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';



export default function LoginPage({ csrfToken }) {
  const router = useRouter();
  const [error, setError] = useState(null);

  return (
    <>
    <Grid container component="main" sx={{ height: '100vh' }} justifyContent="center" alignContent="center">
    <CssBaseline />

      <Formik
        initialValues={{ email: '', password: ''}}
        validationSchema={Yup.object({
          email: Yup.string()
            .max(30, 'Must be 30 characters or less')
            .email('Invalid email address')
            .required('E-mail'),
          password: Yup.string().required('Şifrenizi Giriniz'),
      
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const res = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: "/",
          });
          if (res?.error) {
            setError(res.error);
          } else {
            setError(null);
          }
          if (res.url) router.push(res.url);
          setSubmitting(false);
        }}
      >
        {(formik) => (
     <form onSubmit={formik.handleSubmit}>
     <TextField
       fullWidth
       id="email"
       name="email"
       label="Email"
       value={formik.values.email}
       onChange={formik.handleChange}
       error={formik.touched.email && Boolean(formik.errors.email)}
       helperText={formik.touched.email && formik.errors.email}
     />
     <TextField
       fullWidth
       id="password"
       name="password"
       label="Şifre"
       type="password"
       value={formik.values.password}
       onChange={formik.handleChange}
       error={formik.touched.password && Boolean(formik.errors.password)}
       helperText={formik.touched.password && formik.errors.password}
     />
     <Button color="primary" variant="contained" style={{marginTop:10}} fullWidth type="submit">
       Giriş Yap
     </Button>
   </form>
        )}
      </Formik>
      </Grid>
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

