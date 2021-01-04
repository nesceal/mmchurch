import { StyleSheet } from 'aphrodite/no-important';

export const styleSheet = () =>
  StyleSheet.create({
    header: {
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#800000',
    },
    headerItem: {
      color: '#ffffff',
      textAlign: 'center',
      padding: '14px',
      textDecoration: 'none',
      textTransform: 'uppercase',
    },
  });
