import React from 'react'

export default function Boiling({ scale, temperature }) {
    return (scale === 'celsius' && temperature >= 100) ||
        (scale === 'fahrenheit' && temperature >= 212) ? (
        <p>Water is Boiling 🚰</p>
    ) : (
        <p>Water is not Boiling 🚱</p>
    )
}
