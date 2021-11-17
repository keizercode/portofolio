import "../styles/index.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Luqman Abdur Rohim</title>
                <link rel="icon" href="/keizer.png" />
            </Head>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
