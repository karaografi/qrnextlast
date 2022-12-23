import React from 'react'
import { useSession,getSession} from 'next-auth/react';
import { Typography } from '@mui/material';

const BusinessPage = () => {
  const { data: session } = useSession()
  return (
    <Typography>
      İşletme sayfası
    </Typography>
  )
}

export default BusinessPage

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}