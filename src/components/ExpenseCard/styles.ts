import styled from 'styled-components/native';

export const Container = styled.View`
  height: 64px;
  padding: 12px 24px;
  border-bottom-color: #9a9ca0;
  border-bottom-width: 1px;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftContainer = styled.View``;

export const Title = styled.Text`
  font-size: 16px;
  line-height: 16px;
  color: #000;
  font-family: 'Poppins-Medium';
`;

export const Subtitle = styled.Text`
  font-size: 12px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 6px;
`;

export const RightContainer = styled.View`
  align-items: flex-end;
`;

export const Amount = styled.Text`
  font-size: 12px;
  line-height: 16px;
  color: #000;
`;

export const DateTime = styled.Text`
  font-size: 8px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.5);
`;

export const BottomContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
`;

export const Image = styled.Image`
  margin-left: 8px;
`;
