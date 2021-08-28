import Link from 'next/link';
import Image from 'next/image';
import {
  Code,
  Heading,
  ListItem,
  OrderedList,
  UnorderedList
} from '@chakra-ui/react';

import ModelFrame from './ModelFrame';
import VideoFrame from './VideoFrame';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const CustomH1 = (props) => {
  return (
    <Heading as="h1" size="xl" my={4}>
      {props.children}
    </Heading>
  );
};
const CustomH2 = (props) => {
  return (
    <Heading as="h1" size="lg" my={4}>
      {props.children}
    </Heading>
  );
};
const CustomH3 = (props) => {
  return (
    <Heading as="h1" size="md" my={4}>
      {props.children}
    </Heading>
  );
};

const CustomUl = (props) => {
  return <UnorderedList>{props.children}</UnorderedList>;
};
const CustomOl = (props) => {
  return <OrderedList>{props.children}</OrderedList>;
};
const CustomLi = (props) => {
  return <ListItem ml={2}>{props.children}</ListItem>;
};

const CustomCode = (props) => {
  return (
    <Code my={4} p={2}>
      {props.children}
    </Code>
  );
};

const MDXComponents = {
  Image,
  ModelFrame,
  VideoFrame,
  a: CustomLink,
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  ul: CustomUl,
  ol: CustomOl,
  li: CustomLi,
  code: CustomCode
};

export default MDXComponents;
