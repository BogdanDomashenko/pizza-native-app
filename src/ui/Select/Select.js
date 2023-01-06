import { StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { mainTheme } from "../../theme";

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
    borderColor: mainTheme.COLOR_MUTED_MIDDLE,
  },
  boxFocus: {
    borderColor: mainTheme.COLOR_PRIMARY,
  },
  dropdown: {
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: mainTheme.COLOR_MUTED_MIDDLE,
    backgroundColor: mainTheme.COLOR_LIGHT,
    width: "100%",
  },
  text: {
    color: mainTheme.COLOR_MUTED_MIDDLE,
  },
});
