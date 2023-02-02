import { StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { lightTheme } from "../../theme";

export const Select = (props) => (
  <SelectList
    {...props}
    boxStyles={styles.box}
    dropdownStyles={styles.dropdown}
  />
);

const styles = StyleSheet.create({
  box: {
    borderRadius: 5,
    borderStyle: "solid",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: lightTheme.COLOR_MUTED_MIDDLE,
  },
  boxFocus: {
    borderColor: lightTheme.COLOR_PRIMARY,
  },
  dropdown: {
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: lightTheme.COLOR_MUTED_MIDDLE,
    backgroundColor: lightTheme.COLOR_LIGHT,
    width: "100%",
  },
  text: {
    color: lightTheme.COLOR_MUTED_MIDDLE,
  },
});
