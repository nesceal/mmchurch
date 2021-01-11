import { StyleSheet } from 'aphrodite/no-important';
import { COLORS, STYLE_MEDIA } from '../../util/constants';

export const styleSheet = () =>
  StyleSheet.create({
    teachings: {
    },
    headline: {
      color: COLORS.white,
      fontSize: '28px',

      [STYLE_MEDIA.TABLET]: {
        fontSize: '32px',
      },
    },
    paragraph: {
      color: COLORS.white,
    },
  });
