import { StyleSheet } from 'aphrodite/no-important';
import { COLORS, STYLE_MEDIA } from '../../util/constants';

export const styleSheet = () =>
  StyleSheet.create({
    landing: {
      textAlign: 'center',
      color: '#FFFFFF',
      backgroundImage: 'url(images/header.jpg)',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      display: 'flex',
      alignItems: 'center',
      height: '75vh',

      [STYLE_MEDIA.MOBILE]: {
        height: '50vh',
      },
    },
    paragraph: {
      color: COLORS.white,
      textShadow: `2px 2px ${COLORS.darkGray}`,
      width: '50%',
      fontSize: '20px',
    },
  });
