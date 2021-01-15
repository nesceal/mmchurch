import { StyleSheet } from 'aphrodite/no-important';
import { COLORS, STYLE_MEDIA } from '../../util/constants';

export const styleSheet = () =>
  StyleSheet.create({
    nav: {
      backgroundColor: COLORS.red,
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    list: {
      margin: '0',
      listStyleType: 'none',
      backgroundColor: COLORS.red,

      [STYLE_MEDIA.MOBILE]: {
        height: 'inherit',
        width: '100%',
        padding: '0',
        display: 'block',
        borderTop: `1px solid ${COLORS.lightRed}`,
        position: 'absolute',
      },

      [STYLE_MEDIA.TABLET]: {
        height: 'inherit',
        width: '100%',
        padding: '0',
        display: 'block',
        borderTop: `1px solid ${COLORS.lightRed}`,
        position: 'absolute',
      },

      [STYLE_MEDIA.DESKTOP]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70px',
        padding: '0 6rem'
      },
    },
    item: {
      height: '50px',
      padding: '14px',
      minWidth: '12.5%',

      [STYLE_MEDIA.MOBILE]: {
        display: 'none',
      },

      [STYLE_MEDIA.TABLET]: {
        display: 'none',
      },

      [STYLE_MEDIA.DESKTOP]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    label: {
      color: COLORS.white,
      fontWeight: '700',
      textDecoration: 'none',
      textTransform: 'uppercase',
      textAlign: 'center',
      fontFamily: `Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif`,
      
      [STYLE_MEDIA.MOBILE]: {
        display: 'block',
      },

      [STYLE_MEDIA.TABLET]: {
        display: 'block',
      },

      [STYLE_MEDIA.DESKTOP]: {
        display: 'inline',
      },
    },
    active: {
      backgroundColor: COLORS.green,

      [STYLE_MEDIA.MOBILE]: {
        borderRadius: '0',
      },

      [STYLE_MEDIA.TABLET]: {
        borderRadius: '0',
      },

      [STYLE_MEDIA.DESKTOP]: {
        borderRadius: '4px',
      },
    },
    firstHalfRightMargin: {
      [STYLE_MEDIA.MOBILE]: {
        marginRight: '0',
      },

      [STYLE_MEDIA.TABLET]: {
        marginRight: '0',
      },

      [STYLE_MEDIA.DESKTOP]: {
        marginRight: '10%',
      },
    },
    lastHalfRightMargin: {
      [STYLE_MEDIA.MOBILE]: {
        marginLeft: '0',
      },

      [STYLE_MEDIA.TABLET]: {
        marginLeft: '0',
      },

      [STYLE_MEDIA.DESKTOP]: {
        marginLeft: '10%',
      },
    },
    hamburgerLabel: {
      cursor: 'pointer',
      backgroundColor: COLORS.green,
      color: COLORS.white,
      fontSize: '24px',
      margin: '10px',
      padding: '0px 6px',
      borderRadius: '4px',

      [STYLE_MEDIA.MOBILE]: {
        display: 'inline-block',
      },

      [STYLE_MEDIA.TABLET]: {
        display: 'inline-block',
      },

      [STYLE_MEDIA.DESKTOP]: {
        display: 'none',
      },
    },
    showMenuItems: {
      [STYLE_MEDIA.MOBILE]: {
        display: 'flex',
      },

      [STYLE_MEDIA.TABLET]: {
        display: 'flex',
      },
    },
    hamburger: {
      display: 'none',
    },
    logoContainer: {
      position: 'absolute',
      backgroundColor: '#800000',
      width: '155px',
      borderRadius: '50%',
      height: '155px',
      marginLeft: 'auto',
      marginRight: 'auto',
      left: '0',
      right: '0',
      top: '0',

      [STYLE_MEDIA.MOBILE]: {
        display: 'none',
      },

      [STYLE_MEDIA.TABLET]: {
        display: 'none',
      },

      [STYLE_MEDIA.DESKTOP]: {
        display: 'block',
      },
    },
    logo: {
      position: 'absolute',
      top: '12px',
      marginLeft: 'auto',
      marginRight: 'auto',
      left: '0',
      right: '0',
      zIndex: '1',

      [STYLE_MEDIA.MOBILE]: {
        height: '30px',
      },

      [STYLE_MEDIA.TABLET]: {
        height: '30px',
      },

      [STYLE_MEDIA.DESKTOP]: {
        height: '100px',
      },
    },
  });
