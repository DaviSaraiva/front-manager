/* eslint-disable no-console */
import React, { ChangeEvent, useCallback, useState } from 'react';
import { FaEnvelope, FaKey, FaUser } from 'react-icons/fa';
import { store } from 'react-notifications-component';

import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import IDevForm from '../../interfaces/devForm';
import api from '../../services/api';
import { Container, Content, Background, Form, FormActions } from './styles';

const SingUpDev: React.FC = () => {
  const history = useHistory();
  const [model, setModel] = useState<IDevForm>({
    name: '',
    email: '',
    password: '',
  });

  const updateModel = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setModel({
        ...model,
        [e.target.name]: e.target.value,
      });
    },
    [model],
  );

  const onSubmit = useCallback(
    async (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault(); // não mandar antes que eu set os dados
      try {
        await api.post('/users', model);
        store.addNotification({
          title: 'Sucesso!',
          message: 'Cadastro realizado com sucesso',
          type: 'success',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 2000,
          },
        });
        history.push('/logindev');
      } catch (err) {
        store.addNotification({
          title: 'Error!',
          message: 'Falha ao cadastrar novo usuario',
          type: 'danger',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 2000,
          },
        });
      }
    },
    [model, history],
  );

  return (
    <>
      <Container>
        <Background />
        <Content>
          <Form onSubmit={onSubmit}>
            <h1>Cadastro de Dev</h1>
            <Input
              icon={FaUser}
              placeholder="Nome"
              name="name"
              type="text"
              value={model.name}
              required
              onChange={updateModel}
            />
            <Input
              icon={FaEnvelope}
              placeholder="Email"
              type="email"
              name="email"
              required
              value={model.email}
              onChange={updateModel}
            />
            <Input
              icon={FaKey}
              placeholder="Senha"
              name="password"
              isPassword
              type="password"
              required
              value={model.password}
              onChange={updateModel}
            />
            <Button type="submit">Cadastrar</Button>
            <FormActions>
              <Link to="/logindev">Já sou Cadastrado</Link>
              <Link to="/logindev">Voltar</Link>
            </FormActions>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default SingUpDev;
