import 'styled-components';
import { lightTheme } from './lightTheme';

export type ITheme = typeof lightTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {}
}
