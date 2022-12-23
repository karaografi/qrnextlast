import React from 'react'
import { useSession} from 'next-auth/react';

const TablesPage = () => {
  const { data: session } = useSession()
  return (
    <div>T</div>
  )
}

export default TablesPage