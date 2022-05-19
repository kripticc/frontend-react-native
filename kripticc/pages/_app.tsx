import '../styles/globals.css'
import type { AppProps } from 'next/app'
import InputBtn from "../components/input-btn";
import Layout from "../components/Layout";
import SignInForm from "../components/sign-in-form";

function MyApp({ Component, pageProps }: AppProps) {
  return (
          <Layout>
            <Component {...pageProps} />
            {/*<SignInForm/>*/}
          </Layout>)
}

export default MyApp
