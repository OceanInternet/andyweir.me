import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { PenTool as PostIcon } from 'react-feather';
import PaginationNavigation from '../../navigation/pagination';
import PostSummary from './post-summary';
import * as styles from './styles.module.scss';

export default PostIndexTemplate;
export const PostIndexProp = {
    posts: PropTypes.arrayOf(PropTypes.any).isRequired,
    index: PropTypes.number.isRequired,
    first: PropTypes.bool.isRequired,
    last: PropTypes.bool.isRequired,
    pageCount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    pathPrefix: PropTypes.string.isRequired,
};

PostIndexTemplate.propTypes = PostIndexProp;

function PostIndexTemplate({ posts = [], index = 1, first, last, pageCount = 1, title, summary }) {
    const prev = index > 2 ? (index - 1).toString() : '';
    const next = index < pageCount ? (index + 1).toString() : index.toString();

    const hasPosts = !!posts.length;
    const hasPages = !!pageCount && pageCount < 1;

    const postListProps = {
        children: posts.map(postProps => <PostSummary {...postProps} />),
    };

    const paginationNavProps = {
        first,
        last,
        index,
        pageCount,
        prevLink: `/blog/${prev}`,
        nextLink: `/blog/${next}`,
    };

    return (
        <Fragment>
            <header className={styles.indexHeader}>
                <h1>
                    <PostIcon className={styles.textIcon} />
                    {title}&hellip;
                </h1>
                <p>{summary}</p>
            </header>
            {hasPages && <PaginationNavigation {...paginationNavProps} />}
            {hasPosts && <section {...postListProps} className={styles.postList} />}
            {hasPages && <PaginationNavigation {...paginationNavProps} />}
        </Fragment>
    );
}
