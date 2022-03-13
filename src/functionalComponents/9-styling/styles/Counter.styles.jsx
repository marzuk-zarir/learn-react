import styled, { createGlobalStyle } from 'styled-components'
import ExternalComponent from '../components/ExternalComponent'

// GlobalStyles injecting
export const GlobalStyles = createGlobalStyle`
    kbd {
        background: lightgray;
        font-weight: 500;
        padding: 0.5rem;
        border-radius: 0.5rem;
    }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    background: #f9fafb;

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        outline: 0;
        border: 0;
        box-sizing: border-box;
    }
`

export const Card = styled.div`
    min-width: 500px;
    background: #e4e4e7;
    text-align: center;
    padding: 1.4rem;
    border-radius: 1rem;
`

export const Heading = styled.h1`
    color: #0f172a;
    font-size: 2rem;
    font-weight: 600;
    text-align: left;
`

export const CounterCount = styled.h2`
    color: #0f172a;
    font-size: 3rem;
    font-weight: 500 !important;
    margin: 2rem 0;
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 1rem;
`

// For reuse our style we can use prop from this component
export const Button = styled.button`
    color: ${(prop) => prop.color}; /* Render prop pattern 🤐 */
    background: ${(prop) => prop.background};
    font-size: 1rem;
    padding: 0.8rem 1rem;
    border-radius: 0.6rem;
    cursor: pointer;
`

// External component styling
export const External = styled(ExternalComponent)`
    color: lightcoral;
    font-size: ${(prop) => prop.fontSize}rem;
    font-weight: 400;
`
