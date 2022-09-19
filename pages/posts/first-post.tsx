import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
        <Head>
            <title>Experience</title>
        </Head>
      <h1>Work Experience</h1>
      <ul>
        <li>Westport House</li>
        <li>Mawla</li>
        <li>EY Tech Consulting</li>
      </ul>
      {/* <h2>
        <Link href="/">Back to home</Link>
      </h2> */}
    </Layout>
  );
}