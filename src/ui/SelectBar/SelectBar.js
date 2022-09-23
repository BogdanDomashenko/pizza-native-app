import { Text, View, Pressable } from "react-native";
import styled from "styled-components";
import { mainTheme } from "../../theme";

const Select = styled.View`
  background-color: ${mainTheme.COLOR_MUTED_LIGHT};
  border-radius: 10px;
  padding: 2px;
`;

const Option = styled.Pressable`
  background-color: #ffffff;
  padding: 8px;
  flex: 1 1;
  margin: 0 6px;
  align-items: center;
  border-radius: 5px;
`;

const Row = styled.View`
  flex-direction: row;
  padding: 3px 0;
`;

export const SelectBar = ({ itemsRow1, itemsRow2 }) => {
  return (
    <Select>
      <Row>
        {itemsRow1?.map((item) => (
          <Option>
            <Text>{item}</Text>
          </Option>
        ))}
      </Row>
      <Row>
        {itemsRow2?.map((item) => (
          <Option>
            <Text>{item}</Text>
          </Option>
        ))}
      </Row>
    </Select>
  );
};
