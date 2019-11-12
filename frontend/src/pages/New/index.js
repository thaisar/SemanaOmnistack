import React, { useState, useMemo} from 'react';
import api from '../../services/api';

import { 
    Form, FormLabel, FormLabelSpan,FormInput,
    Btn
} from '../../styles';
import {
    LabelThumbnail, InputThumbnail, Img
} from './styles'

import camera from '../../assets/camera.svg'

export default function New( { history } ) {
    const [thumbnail, setThumbnail] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
 
    const preview = useMemo (() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail] )

    async function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('user')

        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        await api.post('/spots', data, {
            headers: { user_id }
        });

        history.push('/dashboard');
    }

    return (
            <Form onSubmit={handleSubmit}>
                
                <LabelThumbnail 
                id="thumbnail" 
                style={{ backgroundImage: `url(${preview})` }} 
                image={thumbnail ? 'hasThumbnail' : ''}>
                    <InputThumbnail type="file" onChange={event => setThumbnail(event.target.files[0])} />
                    <Img src={camera} alt="Select img" image={thumbnail ? 'hasThumbnail' : ''}/>
                </LabelThumbnail>

                <FormLabel htmlFor='company'>EMPRESA *</FormLabel>
                <FormInput
                    id='company'
                    placeholder='Sua empresa incrível'
                    value={company}
                    onChange={event => setCompany(event.target.value)}
                />

                <FormLabel htmlFor='techs'>TECNOLOGIAS * <FormLabelSpan>(separadas por vírgula)</FormLabelSpan></FormLabel>
                <FormInput
                    id='techs'
                    placeholder='Quais tecnologias usam?'
                    value={techs}
                    onChange={event => setTechs(event.target.value)}
                />

                <FormLabel htmlFor='price'>VALOR DA DIÁRIA * <FormLabelSpan>(em branco para GRATUITO)</FormLabelSpan></FormLabel>
                <FormInput
                    id='price'
                    placeholder='Valor cobrado por dia '
                    value={price}
                    onChange={event => setPrice(event.target.value)}
                />

                <Btn type="submit">Cadastrar</Btn>
            </Form>
    )
}