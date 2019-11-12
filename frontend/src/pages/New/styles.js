import styled from 'styled-components'

export const LabelThumbnail  = styled.label` 
    margin-bottom: 20px;
    border: 1px dashed #ddd;
    background-size: cover;
    cursor: pointer;
    display: flex;
    height: 160px;
    justify-content: center;
    align-items: center;
    ${props => props.image == 'hasThumbnail'
   && "border: 0;"}
`   

export const InputThumbnail = styled.input`
    display: none;
`

export const Img = styled.img`
    ${props => props.image == 'hasThumbnail'
   && "display: none;"}
`
