import tinycolor from "tinycolor2";

const primary = "rgb(53 ,53 ,53)";
const secondary = "rgb( 255 ,176 ,4)";
const warning = "#FFC260";
const success = "#3CD4A0";
const info = "#9013FE";
const red="red";
const green="rgb(33 ,192, 99)";
const blue="rgb(26 ,115 ,233)"
const lightenRate = 7.5;
const darkenRate = 15;

const defaultTheme = {
  direction: "rtl",
  palette: {
    primary: {
      main: primary,
      light: tinycolor(primary).lighten(lightenRate).toHexString(),
      dark: tinycolor(primary).darken(darkenRate).toHexString(),
    },
    secondary: {
      main: secondary,
      light: tinycolor(secondary).lighten(lightenRate).toHexString(),
      dark: tinycolor(secondary).darken(darkenRate).toHexString(),
      contrastText: "#FFFFFF",
    },
    warning: {
      main: warning,
      light: tinycolor(warning).lighten(lightenRate).toHexString(),
      dark: tinycolor(warning).darken(darkenRate).toHexString(),
    },
    success: {
      main: success,
      light: tinycolor(success).lighten(lightenRate).toHexString(),
      dark: tinycolor(success).darken(darkenRate).toHexString(),
    },
    info: {
      main: info,
      light: tinycolor(info).lighten(lightenRate).toHexString(),
      dark: tinycolor(info).darken(darkenRate).toHexString(),
    },
    red: {
      main: red,
      light: tinycolor(red).lighten(lightenRate).toHexString(),
      dark: tinycolor(red).darken(darkenRate).toHexString(),
    },
    green: {
      main: green,
      light: tinycolor(green).lighten(lightenRate).toHexString(),
      dark: tinycolor(green).darken(darkenRate).toHexString(),
    },
    blue: {
      main: blue,
      light: tinycolor(blue).lighten(lightenRate).toHexString(),
      dark: tinycolor(blue).darken(darkenRate).toHexString(),
    },
    text: {
      primary: "#4A4A4A",
      secondary: "#6E6E6E",
      hint: "#B9B9B9",
    },
    background: {
      default: "rgb (240, 240, 240)",
      light: "rgb( 255 ,176 ,4)",
    },
  },
  customShadows: {
    widget:
      "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetDark:
      "0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetWide:
      "0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: "#4A4A4A1A",
      },
    },

    MuiMenu: {
      list: {
        backgroundColor: "#fff",
        fontFamily: "Shabnam",
        height: "auto !important"
      },
      paper: {
        boxShadow:
          "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
      },
    },

    MuiSelect: {
      icon: {
        color: "#B9B9B9",
      },
    },
    
    MuiList: {
      padding: {
        paddingTop: "0px !important",
        height:"5000px"
      },
      root: {
        backgroundColor: primary,
    
      },
    },

    MuiListItem: {
      root: {
        display: "flex",
        justifyContent: "flex-start",
        "&$selected": {
          backgroundColor: "#F3F5FF !important",
          "&:focus": {
            backgroundColor: "#F3F5FF",
          },
        },
      },
      gutters: {
        margin: " 0 10px",
        width: "90%",
        borderRadius: "8px",
        marginTop: "8px",
        padding: "8px 0px !important",
      },
      button: {
        "&:hover, &:focus": {
          backgroundColor: "#F3F5FF",
        },
      },
    },

    MuiSvgIcon: {

    },
    MuiTouchRipple: {
      child: {
        backgroundColor: "white",
      },
    },
    MuiTableRow: {
      root: {
        height: 56,
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: "1px solid rgba(224, 224, 224, .5)",
        paddingRight: 24,
      },
      head: {
        fontSize: "0.95rem",
        textAlign: "right ",
        fontFamily: "Shabnam",
      },
      body: {
        fontSize: "0.95rem",
        textAlign: "left !important",
        fontFamily: "Shabnam",
      },
    },
    MuiTypography: {
      root: {
        fontFamily: "Shabnam !important",
      },
    },

    MuiListItemText: {
      root: {
        textAlign: "left !important",
      },
    },

    MUIDataTable: {
      responsiveStacked: {
        overflowX: "hidden !important",
      },
    },

    MuiDivider: {
      root: {
        margin: "0 16px",
      },
    },

    MuiFormHelperText: {
      root: {
        textAlign: "left",
        fontFamily: "Shabnam",
      },
    },

    PrivateSwitchBase: {
      root: {
        marginLeft: 10,
      },
    },
    ForwardRef:{
      iconButtonHidden:{

      }
    },
    MuiAccordionSummary:{
      root:{
        padding:"0"
      }
        
    }
  },
};

export default defaultTheme;
