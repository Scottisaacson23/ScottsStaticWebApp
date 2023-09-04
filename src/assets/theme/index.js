/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { createTheme } from "@mui/material/styles";
// import Fade from "@mui/material/Fade";

// Material Kit 2 React base styles
import colors from "/workspaces/ScottsStaticWebApp/src/assets/theme/base/colors";
import breakpoints from "/workspaces/ScottsStaticWebApp/src/assets/theme/base/breakpoints";
import typography from "/workspaces/ScottsStaticWebApp/src/assets/theme/base/typography";
import boxShadows from "/workspaces/ScottsStaticWebApp/src/assets/theme/base/boxShadows";
import borders from "/workspaces/ScottsStaticWebApp/src/assets/theme/base/borders";
import globals from "/workspaces/ScottsStaticWebApp/src/assets/theme/base/globals";

// Material Kit 2 React helper functions
import boxShadow from "/workspaces/ScottsStaticWebApp/src/assets/theme/functions/boxShadow";
import hexToRgb from "/workspaces/ScottsStaticWebApp/src/assets/theme/functions/hexToRgb";
import linearGradient from "/workspaces/ScottsStaticWebApp/src/assets/theme/functions/linearGradient";
import pxToRem from "/workspaces/ScottsStaticWebApp/src/assets/theme/functions/pxToRem";
import rgba from "/workspaces/ScottsStaticWebApp/src/assets/theme/functions/rgba";

// Material Kit 2 React components base styles for @mui material components
import list from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/list";
import listItem from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/list/listItem";
import listItemText from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/list/listItemText";
import card from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/card";
import cardMedia from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/card/cardMedia";
import cardContent from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/card/cardContent";
import button from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/button";
import iconButton from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/iconButton";
import input from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/form/input";
import inputLabel from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/form/inputLabel";
import inputOutlined from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/form/inputOutlined";
import textField from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/form/textField";
import menu from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/menu";
import menuItem from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/menu/menuItem";
import switchButton from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/form/switchButton";
import divider from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/divider";
import tableContainer from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/table/tableContainer";
import tableHead from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/table/tableHead";
import tableCell from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/table/tableCell";
import linearProgress from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/linearProgress";
import breadcrumbs from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/breadcrumbs";
import slider from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/slider";
import avatar from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/avatar";
import tooltip from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/tooltip";
import appBar from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/appBar";
import tabs from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/tabs";
import tab from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/tabs/tab";
import stepper from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/stepper";
import step from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/stepper/step";
import stepConnector from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/stepper/stepConnector";
import stepLabel from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/stepper/stepLabel";
import stepIcon from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/stepper/stepIcon";
import select from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/form/select";
import formControlLabel from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/form/formControlLabel";
import formLabel from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/form/formLabel";
import checkbox from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/form/checkbox";
import radio from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/form/radio";
import autocomplete from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/form/autocomplete";
import flatpickr from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/flatpickr";
import container from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/container";
import popover from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/popover";
import buttonBase from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/buttonBase";
import icon from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/icon";
import svgIcon from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/svgIcon";
import link from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/link";
import dialog from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/dialog";
import dialogTitle from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/dialog/dialogTitle";
import dialogContent from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/dialog/dialogContent";
import dialogContentText from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/dialog/dialogContentText";
import dialogActions from "/workspaces/ScottsStaticWebApp/src/assets/theme/components/dialog/dialogActions";

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...flatpickr,
        ...container,
      },
    },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    MuiDialog: { ...dialog },
    MuiDialogTitle: { ...dialogTitle },
    MuiDialogContent: { ...dialogContent },
    MuiDialogContentText: { ...dialogContentText },
    MuiDialogActions: { ...dialogActions },
  },
});
