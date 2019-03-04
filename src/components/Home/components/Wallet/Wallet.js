import React from 'react';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Container from 'components/Container';
import Button from 'components/Button';
import Heading from 'components/Heading';
import Gallery from './components/Gallery';


import * as img from './images';

const images = [
  img.wallet1,
  img.wallet2,
  img.wallet3,
];

const StyledFlex = styled(Flex)`

`;

const Wallet = () => (
  <Box my={[8, 10, 13]}>
    <Container>

      <Heading heavy as="h2" my={[4, 6]} fontSize={[5, 6, 7]} color="black">
        <FormattedMessage id="home.miner.headingHardware" />
      </Heading>

      <Box mb={[7, 8, 10]}>
        <Gallery imgList={images} />
      </Box>

      <StyledFlex align="flex-end" column wrap my={[11, 8, 8]}>
        <Button to="gallery" color="base" pill outlined>
          <FormattedMessage id="home.miner.morePhotos" />
        </Button>
      </StyledFlex>

    </Container>
  </Box>
);

export default Wallet;
