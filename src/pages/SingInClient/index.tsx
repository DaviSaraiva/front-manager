import React from 'react';
import { FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Content, Background, Form, FormActions } from './styles';

const SingInClient: React.FC = () => {
  return (
    <>
      <Container>
        <Background />
        <Content>
          <Form>
            <h1>Login com Cliente</h1>
            <Input icon={FaCode} placeholder="Código" type="text" />
            <Button>Entrar</Button>
            <FormActions>
              <Link to="/">Voltar</Link>
            </FormActions>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default SingInClient;
