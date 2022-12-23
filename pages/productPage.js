import React from 'react'
import { useSession} from 'next-auth/react';

const ProductPage = () => {
  const { data: session } = useSession()
  return (
    <div>productPage</div>
  )
}

export default ProductPage