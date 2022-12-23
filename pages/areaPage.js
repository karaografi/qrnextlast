import React from 'react'
import { useSession,getSession} from 'next-auth/react';

const AreaPage = () => {
  const { data: session } = useSession()
  return (
    <div>areaPage</div>
  )
}



export default AreaPage

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