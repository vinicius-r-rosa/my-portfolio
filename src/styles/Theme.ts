const lightPalette = {
    background: '#fdfdfd',
    text: '#2f2f2f',
    textContrast: '#fdfdfd',

    primary: '#0E2972',
    primaryDarker: '#0a1f4f',
    primaryFaded: '#0E297250',

    secondary: '#8efff8',
    secondaryDarker: '#7be8f2',
    secondaryFaded: '#8efff850',

    shadeOne: '#ffffff',
    shadeTwo: '#b8b8b8',
    shadeThree: '#808080',
    shadeFour: '#444444',
    shadeFive: '#000000',

    shadeOneFaded: '#ffffff50',
    shadeTwoFaded: '#b8b8b850',
    shadeThreeFaded: '#80808050',
    shadeFourFaded: '#44444450',
    shadeFiveFaded: '#00000050',

    info: '#007bff',
    infoDarker: '#0056b3',
    success: '#28a745',
    successDarker: '#218838',
    warning: '#ffc107',
    warningDarker: '#d39e00',
    error: '#dc3545',
    errorDarker: '#c82333',
    disabled: '#cccccc',
};

const darkPalette = {
    background: '#2f2f2f',
    text: '#fdfdfd',

    primary: '#2e3451',
    primaryDarker: '#1f2233',
    primaryFaded: '#2e3451',

    secondary: '#2ccbc7',
    secondaryDarker: '#1fa9a1',
    secondaryFaded: '#2ccbc750',

    shadeOne: lightPalette.shadeFive,
    shadeTwo: lightPalette.shadeFour,
    shadeThree: lightPalette.shadeThree,
    shadeFour: lightPalette.shadeTwo,
    shadeFive: lightPalette.shadeOne,

    shadeOneFaded: lightPalette.shadeFiveFaded,
    shadeTwoFaded: lightPalette.shadeFourFaded,
    shadeThreeFaded: lightPalette.shadeThreeFaded,
    shadeFourFaded: lightPalette.shadeTwoFaded,
    shadeFiveFaded: lightPalette.shadeOneFaded,

    info: '#2ccbc7',
    infoDarker: '#1fa9a1',
    success: '#28a745',
    successDarker: '#218838',
    warning: '#ffc107',
    warningDarker: '#d39e00',
    error: '#dc3545',
    errorDarker: '#c82333',
    disabled: '#3e4044',
};

const baseTheme = {
    typography: {
        fontFamily: "'Roboto', sans-serif",
    },
    shadows: {
        none: 'none',
        black: '0px 1px 5px 0px rgba(0, 0, 0, 0.5)',
        white: '0px 3px 5px 0px rgba(255, 255, 255, 0.75)',
    },
};

export const lightTheme = {
    ...baseTheme,
    colors: {
        ...lightPalette,
    },
};

export const darkTheme = {
    ...baseTheme,
    colors: {
        ...darkPalette,
    },
};
