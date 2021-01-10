import { StyleSheet } from 'aphrodite/no-important';
import { STYLE_MEDIA } from '../../util/constants';

export const styleSheet = () =>
  StyleSheet.create({
    about: {
      margin: '30px',
    },
    headline: {
      fontSize: '28px',
      textAlign: 'center',

      [STYLE_MEDIA.TABLET]: {
        fontSize: '32px',
      },
    },
    container: {
      display: 'flex',

      [STYLE_MEDIA.MOBILE]: {
        flexDirection: 'column',
      },

      [STYLE_MEDIA.TABLET]: {
        flexDirection: 'column',
      },

      [STYLE_MEDIA.DESKTOP]: {
        flexDirection: 'row',
      },
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    image: {
      display: 'block',
      maxWidth: '100%',
      height: 'auto',
    },
    paragraph: {
      display: 'flex',
      alignItems: 'center',

      [STYLE_MEDIA.TABLET]: {
        marginTop: '30px',
      },

      [STYLE_MEDIA.DESKTOP]: {
        marginLeft: '30px',
      },
    },
  });
