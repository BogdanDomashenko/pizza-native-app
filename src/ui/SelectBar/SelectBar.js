import { Text, View, Pressable } from "react-native";
import styled from "styled-components";
import { mainTheme } from "../../theme";

const Select = styled.View`
  background-color: ${mainTheme.COLOR_MUTED_LIGHT};
  border-radius: 10px;
  padding: 4px;
`;

const Option = styled.Pressable`
  background-color: ${(props) => (props.seleced ? "#ffffff" : "transparent")};
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
  return (
    <Select>
      <Row>
        {itemsRow1?.map((item) => (
          <Option
            key={item}
            seleced={item === activeItemRow1}
            onPress={() => onSelectRow1 && onSelectRow1(item)}
          >
            <Text>{item}</Text>
          </Option>
        ))}
      </Row>
      <Row>
        {itemsRow2?.map((item) => (
          <Option
            key={item}
            seleced={item === activeItemRow2}
            onPress={() => onSelectRow2 && onSelectRow2(item)}
          >
            <Text>{item}</Text>
          </Option>
        ))}
      </Row>
    </Select>
  );
};
