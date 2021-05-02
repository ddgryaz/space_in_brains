const {useState} = require("react");
const {useEffect} = require("react");

export function Counter({ val, time }) {
    const [ currVal, setCurrVal ] = useState(0);

    useEffect(() => {
        currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
    }, [ currVal ]);

    return <div>Количество брейнов: {currVal}+</div>;
}