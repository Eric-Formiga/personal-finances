import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
    COLORS: {
        /* Application */
        primary: '#473FCE',
        primaryHover: '#8880E5',
        primaryBackgroundExtraLight: '#12113c7d',
        background: '#080325',
        textColor400: '#c2c2c2',
        textColor500: '#cfcfcf',
        borderColor: '#2b374a',
        danger: '#D1493D',
        success: '#2B825C',
        warning: '#eba800',
        white: '#FFFFFF',

        /* Application Components */
        buttonBackground: '#473FCE',
        buttonColor: '#FFFFFF',
        buttonHover: '#4F46E5',
        inputBackground: 'transparent',
        inputBackgroundHover: 'transparent',
        inputColor: '#cfcfcf',
        inputBorderColor: '#4F46E573',
        inputBorderColorFocus: '#4F46E5',
        inputPlaceholderColor: '#a3a3a3',
        tableHeaderBackground: '#191A38',
        tableHeaderBorderColor: '#2b374a',
        tableRowHover: '#14142fab',

        /* Layout */
        sidebarBackground: '#080325',
        sidebarColor: '#E2E8F0',
        sidebarBackgroundHover: '#191A38',
        sidebarBorderColor: '#2b374a',
        navbarBackground: '#080325',
        navbarColor: '#cfcfcf',
        navbarBackgroundHover: '#191A38',

        /* Pages - Auth */
        authCardTitleColor: '#c9cbcf',
        authCardSubTitleColor: '#7d848c',
        authErrorAlertBackground: '#961408ed',
        authErrorAlertColor: '#FFFFFF',
    },
    FONT_SIZES: {
        sm: '.9rem',
        md: '1rem',
        lg: '1.3rem',
        xl: '1.6rem',
        xxl: '2rem',
    }
}