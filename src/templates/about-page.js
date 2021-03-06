import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import HTMLContent from '../components/layout/html-content';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import AboutTemplate, { AboutProp } from '../components/pages/about/about-template';

export default AboutPage;

AboutPage.propTypes = {
    data: PropTypes.shape(AboutProp).isRequired,
};

export const query = graphql`
    query AboutPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                summary
                footnote
            }
            content: html
        }
    }
`;

function AboutPage({ data }) {
    const { frontmatter, content } = data.page;
    const { title, summary } = frontmatter;

    const seoProps = {
        title,
        summary,
    };

    const pageProps = {
        ...frontmatter,
        content,
        contentComponent: HTMLContent,
    };

    return (
        <Layout>
            <SEO {...seoProps} />
            <AboutTemplate {...pageProps} />
        </Layout>
    );
}
