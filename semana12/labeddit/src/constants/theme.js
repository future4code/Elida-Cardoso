import { createTheme } from '@material-ui/core/styles';
import { primaryColor, textColor } from "./colors"

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: "white"
        },
        text: {
            primary: textColor
        }
    }
});

export default theme;