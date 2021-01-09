import { StyleSheet } from 'aphrodite/no-important';
import { STYLE_MEDIA } from '../../util/constants';

export const styleSheet = () =>
  StyleSheet.create({
    about: {
      margin: '30px',
    },
    headline: {
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    container: {
      display: 'flex',

      [STYLE_MEDIA.TABLET]: {
        flexDirection: 'column',
      },

      [STYLE_MEDIA.DESKTOP]: {
        flexDirection: 'row',
      },
    },
    image: {
      display: 'flex',
      justifyContent: 'center',
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
