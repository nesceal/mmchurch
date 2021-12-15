import { StyleSheet } from 'aphrodite/no-important';
import { COLORS, STYLE_MEDIA } from '../../util/constants';

export const styleSheet = () =>
  StyleSheet.create({
    landing: {
      textAlign: 'center',
      color: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      marginTop: '80px',

      [STYLE_MEDIA.MOBILE]: {
        marginTop: '0px',
      }
    },
    background: {
      height: 'auto',
      maxWidth: '100%'
    },
    paragraph: {
      color: COLORS.green,
      textShadow: `2px 2px ${COLORS.white}`,
      marginTop: '12%',
      fontSize: '28px',
      fontFamily: `'Droid Serif', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
      fontStyle: 'italic',
      position: 'absolute',

      [STYLE_MEDIA.MOBILE]: {
        fontSize: '16px',
      }
    },
  });
