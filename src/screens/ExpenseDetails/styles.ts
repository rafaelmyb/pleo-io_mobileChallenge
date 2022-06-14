import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  flex-direction: column;
  padding: 12px 24px;
  background-color: #fff;
`;

export const ContainerText = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 18px 0;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  color: #000;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #000;
`;
