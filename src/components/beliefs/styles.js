import { StyleSheet } from 'aphrodite/no-important';
import { STYLE_MEDIA } from '../../util/constants';

export const styleSheet = () => StyleSheet.create({
  beliefs: {
    textAlign: 'center'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',

    [STYLE_MEDIA.TABLET]: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  },
  belief: {
    [STYLE_MEDIA.TABLET]: {
      flex: '0 50%'
    },
    [STYLE_MEDIA.DESKTOP]: {
      flex: '0 33.33333%'
    }
  },
  subheadline: {
    margin: '15px',

    [STYLE_MEDIA.TABLET]: {
      margin: '30px'
    }
  },

  paragraph: {
    margin: '15px',

    [STYLE_MEDIA.TABLET]: {
      margin: '30px'
    }
  }
});