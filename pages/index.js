import Head from 'next/head';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import Link from 'next/link'
import { Button, Box, Container, Typography } from '@mui/material';
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AreaPage from './areaPage';
import BusinessPage from './businessPage';
import CategoryPage from './categoryPage';
import ProductPage from './productPage'
import LoginPage from './auth/login';
import Dashboard from './admin';

{/* <button
            className={`mt-10 uppercase text-sm font-bold tracking-wide text-gray-100 p-3 rounded-lg  focus:outline-none focus:shadow-outline hover:shadow-xl active:scale-90 transition duration-150  ${
              session?.user?.accessToken ? 'bg-red-400' : 'bg-green-400'
            }`}
            onClick={() => (session?.user?.accessToken ? signOut() : signIn())}
          >
            {session?.user?.accessToken ? 'Sign Out' : 'Sign In'}
          </button> */}

export default function Home() {
  const { data: session } = useSession()

  function handleSignOut() {
    signOut()
  }

  return (
    <div>
      {session ? User({ session, handleSignOut }) : User({ session, handleSignOut })}
    </div>
  )
}

// Guest
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className='text-4xl font-bold'>Guest Homepage</h3>

      <div className='flex justify-center'>
        <Link href="/auth/login">Login</Link>
      </div>
    </main>
  )
}

// Authorize User
function User({ session, handleSignOut }) {
  return (
    <div>
      {/* <Dashboard /> */}
    </div>
  )
}


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