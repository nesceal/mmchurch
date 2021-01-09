import { StyleSheet } from 'aphrodite/no-important';
import { STYLE_MEDIA } from '../../util/constants';

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
      width: '50%',
      margin: '30px',
      fontSize: '20px',
    },
  });
