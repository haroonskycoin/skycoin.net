import React, { PureComponent } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import { Flex, Box } from 'grid-styled';
import PropTypes from 'prop-types';
import { rem } from 'polished';

import Link from 'components/Link';

import { COLOR, BOX_SHADOWS, BORDER_RADIUS, FONT_SIZES, FONT_FAMILIES } from 'config';

import placeholder from './placeholder.svg';


const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 65%;
  border-radius: ${BORDER_RADIUS.base} ${BORDER_RADIUS.base} 0 0;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  width: auto;
  min-width: 50%;
  max-width: 100%;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

const ImageBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
`;

const NewsContainer = styled.div`
  width: 100%;
  box-shadow: ${BOX_SHADOWS.box};
  border-radius: ${BORDER_RADIUS.base};
`;

const DateText = styled.p`
  margin: 0;
  color:${COLOR.textLight};
  font-size:${2};
  font-family: ${FONT_FAMILIES.sans};
  line-height: ${rem(24)};
`;

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  text-decoration: none;
  color: #000;
`;

const StyledHeading = styled.h4`
  font-family:${FONT_FAMILIES.sans};
  font-weight: 400;
  line-height: 1.5;
  height: ${FONT_SIZES[4] * 1.5 * 2}px;
  overflow: hidden;
  margin-bottom:${1};
`;


const NewsItem = ({ title, date, href, image }) => (
  <Flex width={[1, 1 / 2, 1 / 3]} px={[3]} pb={4} mb={[6, 8]} align="flex-start">
    <StyledLink href={href} target="_blank">
      <NewsContainer>
        <ImageContainer>
          {image ? <ImageBg bg={image} /> : <Image src={placeholder} />}
        </ImageContainer>
        <Box px={7} pb={10} pt={6}>
          <DateText> {date.format('MMMM DD, YYYY')}</DateText>
          <StyledHeading>{title}</StyledHeading>
        </Box>
      </NewsContainer>
    </StyledLink>
  </Flex>
);

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: momentPropTypes.momentObj.isRequired,
  href: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

function getXml(rss) {
  return axios.get(rss)
    .then((response) => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(response.data, 'text/xml');
      const items = xml.getElementsByTagName('item');

      return Array.prototype.slice.call(items, 0, 3);
    })
    .then((items) => {
      const posts = items.map((item) => {
        const date = moment(new Date(item.getElementsByTagName('pubDate')[0].textContent)).locale('en');
        const enclosure = item.getElementsByTagName('enclosure');
        const image = enclosure.length ? enclosure[0].getAttribute('url') : '';

        return {
          title: item.getElementsByTagName('title')[0].textContent,
          href: item.getElementsByTagName('link')[0].textContent,
          image,
          date,
        };
      });
      return posts;
    });
}

class News extends PureComponent {
  constructor() {
    super();

    this.state = {
      posts: [],
      loaded: false,
    };
  }

  async componentDidMount() {
    const isLocal = window.location.hostname === 'localhost';
    const rss = isLocal ? '/blog.xml' : this.props.rss;

    await this.loadRss(rss);
  }

  async componentWillReceiveProps({ rss }) {
    await this.loadRss(rss);
  }

  async loadRss(rss) {
    let arrayRss = rss;
    if (!Array.isArray(rss)) {
      arrayRss = [rss];
    }

    const promises = arrayRss.map(url => this.loadRssUrl(url));

    await Promise.all(promises);
    // disable react/no-did-mount-set-state
    this.setState({ loaded: true });
  }


  async loadRssUrl(rss) {
    const newPosts = await getXml(rss);
    const posts = this.joinFilterAndSort(this.state.posts, newPosts);


    this.setState({ posts });
  }

  joinFilterAndSort(posts, newPosts) {
    let result = posts;
    newPosts.map((newPost) => {
      if (!posts.includes(newPost)) {
        result.push(newPost);
        return true;
      }
      return false;
    });

    result = result.sort((a, b) => a.date > b.date);
    return result.slice(0, 3);
  }

  render() {
    if (this.state.loaded) {
      return (
        <Flex align="flex-start" justify="space-between" wrap mt={9} mx={[-3]}>
          {this.state.posts.map((p, i) => (
            <NewsItem
              title={p.title}
              date={p.date}
              href={p.href}
              image={p.image}
              key={i}
            />))}
        </Flex>
      );
    }
    return null;
  }
}

News.propTypes = {
  rss: PropTypes.string.isRequired,
};

News.defaultProps = {
  rss: 'https://www.skycoin.net/blog/index.xml',
};

export default News;
