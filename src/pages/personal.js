import React from 'react';
import ReactMarkdown from "react-markdown";
import Layout from '../components/Layout';

const text = `# About me
hi
my name
_is_
## ghiona
hello`;

export default () => (
    <Layout>
        <ReactMarkdown source={text} />
    </Layout>
);
