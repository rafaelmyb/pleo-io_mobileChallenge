import styled from 'styled-components/native';

interface CheckBoxProps {
  fill: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Checkbox = styled.TouchableOpacity<CheckBoxProps>`
  width: 18px;
  height: 18px;
  border-width: 1px;
  justify-content: center;
  align-items: center;
  background-color: ${({fill}) => (fill ? '#000' : '#fff')};
`;

export const LabelCheck = styled.Text`
  color: #000;
  margin-left: 6px;
`;

export const Image = styled.Image``;
