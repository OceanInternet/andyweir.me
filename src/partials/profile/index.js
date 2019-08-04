import { graphql, useStaticQuery } from 'gatsby';
import React                       from 'react';
import { HTMLContent }             from "../../components/content"
import Profile                     from './profile';

export default function() {
    const { partial, profileImageFile, backgroundImageFile } = useStaticQuery(graphql`
        query ProfileQuery {
            partial: markdownRemark(frontmatter: { templateKey: { eq: "profile-partial" } }) {
                summary: html
                frontmatter {
                    title
                    work
                    twitter
                    linkedin
                    github
                }
            }
            profileImageFile: file(relativePath: { eq: "andy-weir.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            backgroundImageFile: file(relativePath: { eq: "andy-weir-firefly-sailing-tall.jpg" }) {
                childImageSharp {
                    fluid(maxHeight: 1600, fit: COVER, cropFocus: ENTROPY) {
                        src
                    }
                }
            }
        }
    `);

    const { frontmatter, summary } = partial;
    const { title, work, twitter, linkedin, github } = frontmatter;
    const { childImageSharp: profileImage } = profileImageFile;
    const { src: backgroundImage } = backgroundImageFile.childImageSharp.fluid;
    const contentComponent = HTMLContent;

    const props = { title, profileImage, backgroundImage, summary, work, twitter, linkedin, github, contentComponent };

    return <Profile {...props} />;
}
