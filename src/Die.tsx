import { useState, useCallback } from "react"

const nombreAleatoire = Math.floor(Math.random() * 6) + 1;
console.log(nombreAleatoire);

const Die = () => {
    const [value, setValue] = useState(nombreAleatoire);


    const handleClick = useCallback(
        () => { setValue(Math.floor(Math.random() * 6) + 1) },
        []
    )
    
    return (
        <div className="roll" onClick={handleClick}>
            {value}
        </div>
    );
};

export default Die;