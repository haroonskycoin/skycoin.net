import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import ImageCard from 'components/ImageCard';
import { ImageContainer  } from 'components/ImageCard/ImageCard';
import Text from 'components/Text';
import { FONT_SIZES, SPACE, COLOR } from 'config';
import Title from './Title';
import image from '../images/support.svg'
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';



const StyledText = styled(Text)`
  ul{
    font-size:${rem(FONT_SIZES[5])};
    line-height:${rem(SPACE[8])} !important;
  }
`;

const Support = ()=>{
    const props = {
        image,
        height: '320px',
        width: [1, 1, 1 / 2],
        backgroundColor: COLOR.base,
    };
    const icon = <ImageContainer {...props} />;

    return (
        <ImageCard image={icon} width={['320px', '320px', 'auto']}>
            <Title id='landing.skyminer.support.title' />
            <StyledText>
            <FormattedHTMLMessage id='landing.skyminer.support.description' />
            </StyledText>
        </ImageCard>
    )
}

export default Support;