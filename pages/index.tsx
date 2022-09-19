import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h3>Hi there! Welcome to my website :) </h3>
        <p>
          I am a fourth-year student at Trinity College Dublin studying computer
          engineering who is a well-rounded, positive, and ambitious person.
        </p>
        <p>
          Over the past few years, I have worked in many different roles, from
          trainee to supervisor, and due to my previous experiences and my
          computer engineering studies, I have great problem-solving skills.{" "}
        </p>
        <p>
          I am seeking an internship that would allow me to apply my skills and
          experiences, while also fostering my love for technology. Checking to
          see if origin worked
        </p>
        {/* <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}
        <Link href="/posts/work-experience">Work Experience</Link>
      </section>
    </Layout>
  );
}
