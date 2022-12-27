import { Text, View, Pressable } from "react-native";
import styled from "styled-components";
import { mainTheme } from "../../theme";

const Select = styled.View`
  background-color: ${mainTheme.COLOR_MUTED_LIGHT};
  border-radius: 10px;
  padding: 4px;
`;

const Option = styled.TouchableOpacity`
  background-color: ${(props) => (props.selected ? "#ffffff" : "transparent")};
  padding: 8px;
  flex: 1 1;
  margin: 0 6px;
  align-items: center;
  border-radius: 5px;
`;

const Row = styled.View`
  flex-direction: row;
  padding: 4px 0;
`;

export const SelectBar = ({
  itemsRow1,
  activeItemRow1,
  onSelectRow1,
  itemsRow2,
  activeItemRow2,
  onSelectRow2,
}) => {
  const hasRow1 = !(itemsRow1[0].name === "none");
  const hasRow2 = !(itemsRow2[0].name === "none");

  const hasRow = hasRow1 || hasRow2;

  if (!hasRow) {
    return null;
  }

  return (
    <Select>
      {hasRow1 && (
        <Row>
          {itemsRow1?.map((item) => (
            <Option
              key={item.id}
              selected={item.name === activeItemRow1}
              onPress={() => onSelectRow1 && onSelectRow1(item.name)}
            >
              <Text>{item.name}</Text>
            </Option>
          ))}
        </Row>
      )}
      {hasRow2 && (
        <Row>
          {itemsRow2?.map((item) => (
            <Option
              key={item.id}
              selected={item.name === activeItemRow2}
              onPress={() => onSelectRow2 && onSelectRow2(item.name)}
            >
              <Text>{item.name}</Text>
            </Option>
          ))}
        </Row>
      )}
    </Select>
  );
};
