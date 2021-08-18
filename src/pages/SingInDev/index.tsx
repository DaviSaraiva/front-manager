import React from 'react';
import { FaEnvelope, FaKey } from 'react-icons/fa';
import Input from '../../components/Input';
import { Container, Content, Background, Form } from './styles';

const SingInDev: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <Form>
            <h1>Login com Dev</h1>
            <Input icon={FaEnvelope} placeholder="Email" type="email" />
            <Input
              icon={FaKey}
              placeholder="Senha"
              isPassword
              type="password"
            />
          </Form>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default SingInDev;
