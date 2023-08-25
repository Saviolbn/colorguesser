import React, { useState } from 'react'

export const Color = ({colorValue,onClick}) => {
    return (
        <button style={{
            backgroundColor: `${colorValue}`,
            width: "200px",
            height: "200px",
            padding: "10px",
            margin: "10px",
            border: 0,
            borderRadius: 100
        }}
        className={colorValue} onClick={onClick}></button>
    )
}
