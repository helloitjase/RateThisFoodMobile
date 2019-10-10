import React from 'react';
import styled from 'styled-components/native';

const MainReviewView = styled.View`

background-color: blue;
`;
const TitleText = styled.Text``;

const MainReviewPage = (props) => {
  console.log(props);
  return (
    <MainReviewView>
      <TitleText>This is the main Review Page</TitleText>
    </MainReviewView>
  );
};

export default MainReviewPage;
