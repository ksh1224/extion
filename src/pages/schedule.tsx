import React from 'react';
import Head from 'next/head';
import styles from 'styles/Home.module.scss';
import Layout from 'src/components/Layout';
// import { initializeApollo } from '../lib/apolloCient';

export default function Schedule() {
  return (
    <Layout home>
      <div>
        Schedule
      </div>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const apolloClient = initializeApollo();

//   // await apolloClient.query({
//   //   query: ALL_POSTS_QUERY,
//   //   variables: allPostsQueryVars,
//   // });

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//     revalidate: 1,
//   };
// }
