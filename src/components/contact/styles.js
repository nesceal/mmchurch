import { StyleSheet } from 'aphrodite/no-important';
import { COLORS, STYLE_MEDIA } from '../../util/constants';

export const styleSheet = () => StyleSheet.create({
  contact: {
    backgroundColor: COLORS.red,
    backgroundImage: 'url("/images/map.png")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: COLORS.white,
    margin: '15px 0',
    padding: '30px 0',
    textAlign: 'center',

    [STYLE_MEDIA.TABLET]: {
      margin: '30px 0'
    }
  },
  headline: {
    fontSize: '28px',

    [STYLE_MEDIA.TABLET]: {
      fontSize: '32px'
    }
  }
});