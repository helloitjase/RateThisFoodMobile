import React, { useState } from 'react';
import styled from 'styled-components/native';
import MainReviewPage from './src/reviewPage/mainReviewPage.js';

const AppView = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;

const AppText = styled.Text`

`;

const AppButton = styled.Button``;

export default function App() {
  const [test, setTest] = useState('hi');

  return (
    <AppView>
      <AppText>Rate This Food</AppText>
      <MainReviewPage />
    </AppView>
  );
}
