import React, {useState} from 'react';
import api from '../../services/api'

import { 
    Title,
    Form, FormLabel, FormInput,
    Btn
} from '../../styles';

export default function Login({ history }) {
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
      event.preventDefault();
  
      const response = await api.post('/sessions', { email });
  
      const { _id } = response.data;
      
      localStorage.setItem('user', _id);
    
      history.push('/dashboard');
    }

    return (
        <>
            <Title>
                Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
      </Title>

            <Form onSubmit={handleSubmit}>
                <FormLabel htmlFor="email"> E-MAIL *</FormLabel>
                <FormInput
                    type="email"
                    id="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                  onChange={event => setEmail(event.target.value)}
                />
                <Btn type="submit">Entrar </Btn>
            </Form>
        </>
    )
}