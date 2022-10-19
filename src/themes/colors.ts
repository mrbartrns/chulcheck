const DEFAULT_COLORS = {
  TRANSPARENT: 'transparent',
  BLACK: '#000000',
  WHITE: '#FFFFFF',

  GREY_25: '#FCFCFD',
  GREY_50: '#F9FAFB',
  GREY_100: '#F2F4F7',
  GREY_200: '#E4E7EC',
  GREY_300: '#D0D5DD',
  GREY_400: '#98A2B3',
  GREY_500: '#667085',
  GREY_600: '#475467',
  GREY_700: '#344054',
  GREY_800: '#1D2939',
  GREY_900: '#101828',

  PRIMARY_25: '#FCFAFF',
  PRIMARY_50: '#F9F5FF',
  PRIMARY_100: '#F4EBFF',
  PRIMARY_200: '#E9D7FE',
  PRIMARY_300: '#D6BBFB',
  PRIMARY_400: '#B692F6',
  PRIMARY_500: '#9E77ED',
  PRIMARY_600: '#7F56D9',
  PRIMARY_700: '#6941C6',
  PRIMARY_800: '#53389E',
  PRIMARY_900: '#42307D',

  ERROR_25: '#FFFBFA',
  ERROR_50: '#FEF3F2',
  ERROR_100: '#FEE4E2',
  ERROR_200: '#FECDCA',
  ERROR_300: '#FDA29B',
  ERROR_400: '#F97066',
  ERROR_500: '#F04438',
  ERROR_600: '#D92D20',
  ERROR_700: '#B42318',
  ERROR_800: '#912018',
  ERROR_900: '#7A271A',

  WARNING_25: '#FFFCF5',
  WARNING_50: '#FFFAEB',
  WARNING_100: '#FEF0C7',
  WARNING_200: '#FEDF89',
  WARNING_300: '#FEC84B',
  WARNING_400: '#FDB022',
  WARNING_500: '#F79009',
  WARNING_600: '#DC6803',
  WARNING_700: '#B54708',
  WARNING_800: '#93370D',
  WARNING_900: '#7A2E0E',

  SUCCESS_25: '#F6FEF9',
  SUCCESS_50: '#ECFDF3',
  SUCCESS_100: '#D1FADF',
  SUCCESS_200: '#A6F4C5',
  SUCCESS_300: '#6CE9A6',
  SUCCESS_400: '#32D583',
  SUCCESS_500: '#12B76A',
  SUCCESS_600: '#039855',
  SUCCESS_700: '#027A48',
  SUCCESS_800: '#05603A',
  SUCCESS_900: '#054F31',
};

export default DEFAULT_COLORS;
export type DefaultColors = keyof typeof DEFAULT_COLORS;
export type Variant = 'default' | 'primary' | 'success' | 'warning' | 'error';