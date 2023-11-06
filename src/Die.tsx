import { useCallback, useState } from "react";

    const Die = (props: { onRoll: (newVal: number) => void}) => {
        const [value, setValue] = useState(Math.floor(Math.random() * 6) + 1);


        const handleClick = useCallback(
            () => { 
                const randomNumber = (Math.floor(Math.random() * 6) + 1)
                props.onRoll(randomNumber)
                setValue(randomNumber) 
            },
            []
        )

        return (
            <div className="onRoll" onClick={handleClick }>
                {value}
            </div>
        );
    };

export default Die;