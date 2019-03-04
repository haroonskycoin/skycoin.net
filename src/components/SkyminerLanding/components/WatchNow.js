import React from 'react';
import PropTypes from 'prop-types';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { rem } from 'polished';

import ImageCard from 'components/ImageCard';
import { ImageFullContainer, ImageContainer } from 'components/ImageCard/ImageCard';
import Text from 'components/Text';
import { FONT_SIZES, SPACE, COLOR } from 'config';
import Title from './Title';
import image from '../images/watchNow.png'


const StyledText = styled(Text)`
  ul{
    font-size:${rem(FONT_SIZES[5])};
    line-height:${rem(SPACE[8])} !important;
  }
`;

const WatchNow = ()=>{
    const props = {
        image,
        height: '320px',
        width: [1, 1, 1 / 2],
        backgroundColor: COLOR.base,
    };
    const icon = <ImageFullContainer {...props} />;

    return (
        <ImageCard image={icon} width={['320px', '320px', 'auto']} flexDirection='row-reverse'>
            <Title id='landing.skyminer.watchNow.title' />
            <StyledText>
            <FormattedHTMLMessage id='landing.skyminer.watchNow.description' />
            </StyledText>
        </ImageCard>
    )
}

export default WatchNow;