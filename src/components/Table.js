import React, { useState } from 'react'
import { Color } from './Color'
import { RandomColorGenerator } from '../functions/RandomColorGenerator'

export const Table = () => {
    const [colorValue,setColorValue]= useState([
        [RandomColorGenerator()],
        [RandomColorGenerator()],
        [RandomColorGenerator()],
        [RandomColorGenerator()],
        [RandomColorGenerator()],
        [RandomColorGenerator()]
    ]);
    console.log(colorValue)
    const [gameColor, setGameColor] = useState(Math.floor(Math.random() * colorValue.length));

    console.log(gameColor)
    const gameClick = (index) =>{
        if (gameColor == index) {
            const newColorValue = [...colorValue];
            newColorValue.splice(index,1)
            setColorValue(newColorValue)
            setGameColor(Math.floor(Math.random() * colorValue.length));
        } else {
            
        }
    }
    return (
        <div>
            <div>{colorValue[gameColor]}</div>
            {colorValue.map((color,index) => {
                return <Color 
                colorValue={color} 
                key = {index}
                onClick={() =>gameClick(index)}
                />
            })}
        </div>
    )
}
