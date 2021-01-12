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
      [STYLE_MEDIA.TABLET]: {
        fontSize: '32px',
      },
    },
    list: {
      ':before': {
        content: `""`,
        position: 'absolute',
        top: '150px',
        bottom: 0,
        width: '2px',
        backgroundColor: COLORS.lighterGray,

        [STYLE_MEDIA.MOBILE]: {
          left: '0',
          marginLeft: '3.5rem'
        },

        [STYLE_MEDIA.TABLET]: {
          left: '0',
          marginLeft: '7.5rem'
        },

        [STYLE_MEDIA.DESKTOP]: {
          left: 'auto',
          right: 'auto',
          marginLeft: 'unset'
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
      height: '50px',
      width: '50px',
      border: `5px solid ${COLORS.lighterGray}`,
      borderRadius: '100%',
      textAlign: 'center',
      color: '#ffffff',
      backgroundColor: COLORS.lightGray,

      [STYLE_MEDIA.MOBILE]: {
        left: '0',
        marginLeft: '2rem'
      },

      [STYLE_MEDIA.TABLET]: {
        left: '0',
        marginLeft: '6rem'
      },

      [STYLE_MEDIA.DESKTOP]: {
        left: '0',
        right: '0',
        margin: '15px auto',
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
