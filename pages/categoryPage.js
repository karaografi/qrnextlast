import React from 'react'
import { useSession} from 'next-auth/react';

const CategoryPage = () => {
  const { data: session } = useSession()
  return (
    <div>categoryPage</div>
  )
}

export default CategoryPage