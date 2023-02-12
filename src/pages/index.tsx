import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";
import { Timeline } from "../components/Timeline";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Tweet Bit, Don&apos;t Any Shit | Tweety</title>
        <meta name="description" content="Tweet Bit, Don't Any Shit| Twitter Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Timeline where={undefined} />
      </div>
    </>
  );
};

export default Home;
