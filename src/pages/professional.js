import React from 'react';
import ReactMarkdown from "react-markdown";
import Layout from '../components/Layout';

const text = `# My Career
stuff here`;

export default () => (
    <Layout>
        <ReactMarkdown source={text} />
    </Layout>
);
