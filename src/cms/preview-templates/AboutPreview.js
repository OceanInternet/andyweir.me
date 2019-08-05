import PropTypes from 'prop-types';
import React from 'react';
import { wrapperStyles } from '../../scss/page/styles.module.scss';
import AboutTemplate from '../../components/pages/about/about-template';

export default AboutPreview;

AboutPreview.propTypes = {
    entry: PropTypes.shape({ getIn: PropTypes.func }),
    widgetFor: PropTypes.func,
};

function AboutPreview({ entry, widgetFor }) {
    const props = {
        title: entry.getIn(['data', 'title']),
        summary: entry.getIn(['data', 'summary']),
        content: widgetFor('body'),
    };

    return (
        <section className={wrapperStyles}>
            <AboutTemplate {...props} />
        </section>
    );
}