import home from './home';
import layout from './layout';
import blog from './blog';
import partnersItem from './partnersItem';
import benefitsItem from './benefitsItem';
import statsItem from './statsItem';
import mobileAppItems from './mobileAppItems';
import testimonialsItem from './testimonialsItem';
import navItem from './navItem';
import footerItem from './footerItem';
import latestPost from './latestPost';
import {heroSection} from './heroSection';
import {benefitsSection} from './benefitsSection';
import {statsSection} from './statsSection';
import {mediaTextSection} from './mediaTextSection';
import {testimonialsSection} from './testimonialsSection';
import {partnersSection} from './partnersSection';
import {conversionSection} from './conversionSection';
import seo from './seo';
import article from './article';
import config from './config';

export const schemaTypes = [
  // Document types
  home,
  layout,
  blog,
  article,
  // Other Types
  partnersItem,
  benefitsItem,
  statsItem,
  mobileAppItems,
  testimonialsItem,
  navItem,
  footerItem,
  latestPost,
  seo,
  config,
  // Sections
  heroSection,
  benefitsSection,
  statsSection,
  mediaTextSection,
  testimonialsSection,
  partnersSection,
  conversionSection,
]
