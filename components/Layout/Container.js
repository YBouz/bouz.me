import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Flex } from '@chakra-ui/react';

const Container = ({ children, ...customMeta }) => {
  const router = useRouter();
  const meta = {
    title: 'Youssef Bouz – Developer',
    description: `Software Developer specialized in Web development & XR development`,
    image: '/me.jpeg',
    type: 'website',
    ...customMeta
  };

  return (
    <Fragment>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://bouz.me${router.asPath}`} />
        <link rel="canonical" href={`https://bouz.me${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Youssef Bouz" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ybooouz" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Flex as="main" flexDir="column" align="center" p={8} minH="100vh">
        {children}
      </Flex>
    </Fragment>
  );
};

export default Container;
