import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Blog from 'components/Blog';

import { COLOR } from 'config';

const Wrapper = styled(Box)`
  background: ${COLOR.white};
  overflow: hidden;
`;

const DEFAULT_LOCALE = 'en';

const SkyminerNews = ({ locale }) => {
  const rssSkyminer = locale !== DEFAULT_LOCALE
    ? `https://www.skycoin.net/blog/${locale}/tags/skyminer/index.xml`
    : 'https://www.skycoin.net/blog/tags/skyminer/index.xml';
  const rssSkywallet = locale !== DEFAULT_LOCALE
    ? `https://www.skycoin.net/blog/${locale}/tags/skywallet/index.xml`
    : 'https://www.skycoin.net/blog/tags/skywallet/index.xml';

  const rss = [rssSkyminer, rssSkywallet];

  return (
    <Wrapper pt={[10, 13]} pb={[7, 8]}>
      <Container>
        <Heading heavy as="h2" my={[4, 6]} fontSize={[5, 6, 7]} width={[1, 2 / 3]}>
          <FormattedMessage id="home.news.heading" />
        </Heading>
        <Blog rss={rss} />
      </Container>
    </Wrapper>
  );
};

SkyminerNews.propTypes = {
  locale: PropTypes.string.isRequired,
};


export default SkyminerNews;
