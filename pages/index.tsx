import { NextPageContext } from '@/node_modules/next/dist/shared/lib/utils';
import { getSession, signOut } from 'next-auth/react';

import Navbar from '@/components/Navbar';

export async function getServerSideProps(context: NextPageContext){
  const session = await getSession(context);

  if(!session){
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      }
    }
  }
  return {
    props: {}
  }
}

const Home = () => {


  return (
    <>
      <Navbar />
    </>
  )
}

export default Home;
