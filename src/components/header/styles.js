import { StyleSheet } from 'aphrodite/no-important';

export const styleSheet = () =>
  StyleSheet.create({
    nav: {
      backgroundColor: '#800000',
      position: 'sticky',
      top: '0',
      minWidth: '760px',
    },
    list: {
      width: '50%',
      display: 'inline-flex',
      listStyleType: 'none',
      padding: '0',
    },
    leftList: {
      justifyContent: 'flex-end',
    },
    righttList: {
      justifyContent: 'flex-start',
    },
    listItem: {
      display: 'flex',
      justifyContent: 'center',
      padding: '14px',
      minWidth: '12.5%',
    },
    leftListLastItem: {
      marginRight: '20%',
    },
    rightListfirstItem: {
      marginLeft: '20%',
    },
    label: {
      color: '#ffffff',
      fontWeight: '700',
      textDecoration: 'none',
      textTransform: 'uppercase',
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
    },
    logo: {
      position: 'absolute',
      top: '12px',
      marginLeft: 'auto',
      marginRight: 'auto',
      left: '0',
      right: '0',
      height: '100px',
    },
    active: {
      backgroundColor: '#3B850D',
      borderRadius: '4px',
    },
  });
