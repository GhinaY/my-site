import React from 'react';
import ReactMarkdown from "react-markdown";
import Layout from '../components/Layout';

const text = `# What I Do
stuff here`;

export default () => (
    <Layout>
        <ReactMarkdown source={text} />
    </Layout>
);
