import React, { useState } from 'react';
import styled from 'styled-components/native';

const AppView = styled.View`
flex: 1;
align-items: center;
justify-content: center;
background-color: blue;
`;

const AppText = styled.Text`

`;

const AppButton = styled.Button``;

export default function App() {
  const [test, setTest] = useState('hi');

  return (
    <AppView>
      <AppText>Helo world</AppText>
      <AppButton title={test} onPress={() => setTest(test + 1)} />
    </AppView>

  );
}
