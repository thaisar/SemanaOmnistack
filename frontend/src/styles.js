import styled from 'styled-components'

export const AppContainer = styled.div` 
    margin: 80px auto 0;
    max-width: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;    
`

export const AppContent  = styled.div` 
    width: 100%;
    background: #FFF;
    margin-top: 50px;
    border-radius: 4px;
    padding: 30px;
`

export const Title = styled.p`
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 30px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const FormLabel = styled.label`
    font-size: 14px;
    color: #444;
    font-weight: bold;
    margin-bottom: 8px;
`

export const FormLabelSpan = styled.span`
    font-weight: normal;
    color: #999;
    font-size: 9px;
`

export const FormInput = styled.input`
    margin-bottom: 20px;
    border: 1px solid #DDD;
    border-radius: 2px;
    height: 45px;
    padding: 0 15px;
    font-size: 16px;
`

export const Btn = styled.button`
    border: 0;
    border-radius: 2px;
    width: 100%;
    height: 42px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: bold;
    background: #f05a5b;
    color: #fff;
    cursor: pointer; 
    &:hover {
        background: #e14f50;
    }
`


