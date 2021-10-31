import { createTheme } from '@material-ui/core/styles';
import { primaryColor, textColor, backgroundColor} from "./colors"

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: "white",
            bgcolor: backgroundColor
        },
        text: {
            primary: textColor
        }
    }
});

export default theme;