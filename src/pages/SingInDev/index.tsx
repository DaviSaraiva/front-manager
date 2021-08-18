import React from 'react';
import { FaEnvelope, FaKey } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Content, Background, Form, FormActions } from './styles';

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
            <Button>Entrar</Button>
            <FormActions>
              <Link to="/sign-up">Faça seu Cadastro</Link>
              <Link to="/">Voltar</Link>
            </FormActions>
          </Form>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default SingInDev;
