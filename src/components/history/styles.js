import { StyleSheet } from 'aphrodite/no-important';
import { STYLE_MEDIA } from '../../util/constants';

export const styleSheet = () => StyleSheet.create({
  history: {
    textAlign: 'center'
  },
  headline: {
    fontSize: '28px',

    [STYLE_MEDIA.TABLET]: {
      fontSize: '32px'
    }
  },
  item: {
    margin: '0 auto',
    maxWidth: '750px',
    padding: '0 20px'
  },
  title: {
    textAlign: 'left'
  },
  paragraph: {
    textAlign: 'justify'
  }
});