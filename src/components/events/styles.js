import { StyleSheet } from 'aphrodite/no-important';
import { COLORS, STYLE_MEDIA } from '../../util/constants';

export const styleSheet = () =>
  StyleSheet.create({
    events: {
      textAlign: 'center',
    },
    headline: {
      fontSize: '28px',

      [STYLE_MEDIA.TABLET]: {
        fontSize: '32px',
      },
    },
    subheadline: {
      margin: '15px',

      [STYLE_MEDIA.TABLET]: {
        margin: '30px',
      },
    },
    list: {
      display: 'flex',
      flexDirection: 'column',

      [STYLE_MEDIA.TABLET]: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },

      [STYLE_MEDIA.DESKTOP]: {
        flexWrap: 'nowrap',
      },
    },
    item: {
      color: COLORS.gray,
      fontFamily: `'Droid Serif', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
      fontStyle: 'italic',
    },
    event: {
      paddingTop: '10px',

      [STYLE_MEDIA.MOBILE]: {
        flex: '0 50%',
        paddingTop: '25px',
      },

      [STYLE_MEDIA.TABLET]: {
        flex: '0 50%',
        paddingTop: '25px',
      },
    },
    icon: {
      backgroundColor: COLORS.green,
      borderRadius: '100%',
      maxWidth: '112px',
    },
    content: {
      margin: '15px',
      textAlign: 'left',

      [STYLE_MEDIA.TABLET]: {
        margin: '30px',
      },
    },
  });
