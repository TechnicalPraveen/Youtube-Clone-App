import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({theme}) => theme.text}
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme}) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 14px;
`;
export default function Comment() {
  return (
    <Container>
      <Avatar src='https://yt3.ggpht.com/ytc/AMLnZu-ULlIXva3zFYzZH5-41mShiaqtHmiuKppP5v_3Uw=s176-c-k-c0x00ffffff-no-rj'/>
      <Details>
        <Name>Praveen Chandra Mahato <Date>1 day ago</Date></Name>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias minima neque consectetur facilis sint laborum iure ut veniam ipsa nisi? Sint unde dolores reprehenderit ipsum nemo quaerat optio error placeat.</Text>
      </Details>
    </Container>
  )
}
