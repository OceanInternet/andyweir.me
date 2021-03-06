import CMS from 'netlify-cms-app';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import styles from '!css-loader!sass-loader!../scss/preview.scss';

import HomePreview from './preview-templates/HomePreview';
import AboutPreview from './preview-templates/AboutPreview';
import BookPreview from './preview-templates/BookPreview';
import PostPreview from './preview-templates/PostPreview';
import ProfilePreview from './preview-templates/ProfilePreview';
import TalkPreview from './preview-templates/TalkPreview';

CMS.registerPreviewStyle(styles.toString(), { raw: true });

CMS.registerPreviewTemplate('home', HomePreview);
CMS.registerPreviewTemplate('about', AboutPreview);
CMS.registerPreviewTemplate('books', BookPreview);
CMS.registerPreviewTemplate('blog', PostPreview);
CMS.registerPreviewTemplate('profile', ProfilePreview);
CMS.registerPreviewTemplate('talks', TalkPreview);
