import PropTypes from 'prop-types';
import React from 'react';
import BookTemplate from '../../components/pages/book/book-template';
import { wrapperStyles } from '../../scss/layout/styles.module.scss';

export default BookPreview;

BookPreview.propTypes = {
    entry: PropTypes.shape({ getIn: PropTypes.func }).isRequired,
    widgetFor: PropTypes.func.isRequired,
};

function BookPreview({ entry, widgetFor }) {
    const props = {
        title: entry.getIn(['data', 'title']),
        subtitle: entry.getIn(['data', 'subtitle']),
        author: entry.getIn(['data', 'author']),
        image: entry.getIn(['data', 'image']),
        summary: entry.getIn(['data', 'summary']),
        content: widgetFor('body'),
    };

    return (
        <section className={wrapperStyles}>
            <BookTemplate {...props} />
        </section>
    );
}
