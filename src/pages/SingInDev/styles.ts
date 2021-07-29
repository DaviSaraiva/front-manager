import styled from 'styled-components';
import logo from '../../assets/logo.png';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: stretch;
  background: #111111;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #fff;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  padding: 40px;
  border: 1px solid #373737;
  background: #373737;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${logo}) no-repeat center;
`;
