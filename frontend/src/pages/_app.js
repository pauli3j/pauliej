// src/pages/_app.js
import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout'; // Adjust the import path if necessary

function PaulieJ({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            console.log(url);
            // gtag.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default PaulieJ;
