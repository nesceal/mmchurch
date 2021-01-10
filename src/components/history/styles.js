import { StyleSheet } from 'aphrodite/no-important';
import { COLORS, STYLE_MEDIA } from '../../util/constants';

export const styleSheet = () =>
  StyleSheet.create({
    history: {
      textAlign: 'center',
      position: 'relative',
      marginBottom: '50px',
    },
    headline: {
      fontSize: '28px',

      [STYLE_MEDIA.TABLET]: {
        fontSize: '32px',
      },
    },
    list: {
      ':before': {
        content: `""`,
        position: 'absolute',
        top: '175px',
        bottom: 0,
        width: '2px',
        backgroundColor: COLORS.lighterGray,

        [STYLE_MEDIA.MOBILE]: {
          left: '16%',
        },

        [STYLE_MEDIA.TABLET]: {
          left: '13%',
        },

        [STYLE_MEDIA.DESKTOP]: {
          left: 'auto',
          right: 'auto',
        },
      },
    },
    itemContainer: {
      display: 'flex',
      padding: '0 20px',
    },
    item: {
      [STYLE_MEDIA.MOBILE]: {
        width: '80%',
      },

      [STYLE_MEDIA.TABLET]: {
        width: '80%',
      },

      [STYLE_MEDIA.DESKTOP]: {
        width: '40%',
      },
    },
    title: {
      textAlign: 'left',
    },
    paragraph: {
      textAlign: 'justify',
    },
    circle: {
      position: 'absolute',
      margin: '15px auto',
      height: '50px',
      width: '50px',
      border: `5px solid ${COLORS.lighterGray}`,
      borderRadius: '100%',
      textAlign: 'center',
      color: '#ffffff',
      backgroundColor: COLORS.lightGray,

      [STYLE_MEDIA.MOBILE]: {
        left: '10%',
      },

      [STYLE_MEDIA.TABLET]: {
        left: '10%',
      },

      [STYLE_MEDIA.DESKTOP]: {
        left: '0px',
        right: '0px',
      },
    },
    even: {
      [STYLE_MEDIA.MOBILE]: {
        marginRight: '0',
        marginLeft: 'auto',
        flexDirection: 'row-reverse',
      },

      [STYLE_MEDIA.TABLET]: {
        marginRight: '0',
        marginLeft: 'auto',
        flexDirection: 'row-reverse',
      },

      [STYLE_MEDIA.DESKTOP]: {
        flexDirection: 'row',
        marginRight: 'auto',
      },
    },
    odd: {
      flexDirection: 'row-reverse',
      marginLeft: 'auto',
    },
  });
