import { StyleSheet } from 'aphrodite/no-important';
import { COLORS, STYLE_MEDIA } from '../../util/constants';

export const styleSheet = () =>
  StyleSheet.create({
    teachings: {
      textAlign: 'center',
    },
    headline: {
      fontSize: '28px',

      [STYLE_MEDIA.TABLET]: {
        fontSize: '32px',
      },
    },
    list: {
      display: 'flex',
      marginBottom: '80px',
      flexDirection: 'column',

      [STYLE_MEDIA.TABLET]: {
        flexDirection: 'row',
        flexWrap: 'wrap'
      }
    },
    mainQuote: {
      listStyleType: 'none'
    },
    item: {
      padding: '15px',

      [STYLE_MEDIA.MOBILE]: {
        padding: '5px',
      },

      [STYLE_MEDIA.TABLET]: {
        flex: '1 1 50%'
      },

      [STYLE_MEDIA.DESKTOP]: {
        flex: '1 1 33.33333%'
      }
    },
    subheadline: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: `'Droid Serif', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
      fontStyle: 'italic',
      fontSize: '18px',
      border: `1px solid ${COLORS.darkGray}`,
      height: '100%',
      padding: '60px',
      cursor: 'pointer',
      transition: 'background-color 0.5s ease-out',
      
      ':hover': {
        backgroundColor: COLORS.green,
        color: COLORS.white
      },

      [STYLE_MEDIA.MOBILE]: {
        margin: '0',
        padding: '30px',
        fontSize: '14px'
      },
    },
    modal: {
      position: 'fixed',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      zIndex: '1000',
      backgroundColor: COLORS.white,
      overflow: 'scroll',
    },
    modalHeader: {
      height: '70px',
      display: 'flex',
      backgroundColor: COLORS.red,
      position: 'sticky',
      top: '0px',
      zIndex: 1000,

      [STYLE_MEDIA.MOBILE]: {
        height: '53px',
      },
    },
    modalHeadline: {
      margin: '20px 0',

      [STYLE_MEDIA.MOBILE]: {
        padding: '0 0 2rem 0',
      },

      [STYLE_MEDIA.TABLET]: {
        padding: '0 0 2rem 0',
      },

      [STYLE_MEDIA.DESKTOP]: {
        padding: '4.5rem 0 2rem 0'
      }
    },
    modalBody: {
      [STYLE_MEDIA.MOBILE]: {
        padding: '2rem',
      },

      [STYLE_MEDIA.TABLET]: {
        padding: '2rem 6rem',
      },

      [STYLE_MEDIA.DESKTOP]: {
        padding: '2rem 6rem',
      }
    },  
    paragraphItem: {
      textAlign: 'justify',
    },
    poem: {
      marginLeft: 'auto',
      marginRight: 'auto',

      '::first-letter': {
        fontWeight: 'bold',
        fontSize: '24px'
      },

      [STYLE_MEDIA.DESKTOP]: {
        width: '29rem'
      }

    },
    english: {
      [STYLE_MEDIA.DESKTOP]: {
        width: '21rem'
      }
    },
    figcaption: {
      width: '300px',
      marginLeft: 'auto'
    },
    author: {
      fontWeight: 'bold'
    },
    date: {
      marginLeft: '15px',
    },
    listItem: {
      textAlign: 'left',
      color: COLORS.gray,
      fontFamily: `"Roboto Slab","Helvetica Neue",Helvetica,Arial,sans-serif`,
      fontFize: '16px',
      lineHeight: '2',

      [STYLE_MEDIA.MOBILE]: {
        fontSize: '14px',
      },
    },
    close: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      height: '40px',
      width: '40px',
      backgroundColor: COLORS.green,
      borderRadius: '4px',
      color: COLORS.white,
      padding: '0',
      border: 'none',
      marginLeft: 'auto',
      
      ':focus': {
        outline: 'none'
      },

      [STYLE_MEDIA.MOBILE]: {
        fontSize: '40px',
        marginRight: '10px',
        marginTop: '6px',
        marginBottom: '6px',
      },

      [STYLE_MEDIA.TABLET]: {
        fontSize: '40px',
        marginRight: '25px',
        marginTop: '15px',
        marginBottom: '15px',
      },

      [STYLE_MEDIA.DESKTOP]: {
        fontSize: '40px',
        marginRight: '25px',
        marginTop: '15px',
        marginBottom: '15px',
      }
    },
    contentContainer: {
      backgroundColor: COLORS.lighterGray,
      borderRadius: '4px',
      padding: '10px 20px'
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
        height: '40px',
      },

      [STYLE_MEDIA.DESKTOP]: {
        height: '100px',
      },
    },
    logoContainer: {
      position: 'absolute',
      backgroundColor: COLORS.red,
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
    }
  });
