import { useState } from "react";

const Test = () => {
    // const [output, update] = useState("$100");

    // const updatePrice = () => {
    //     update("$75");
    // };
    // return (
    //     <div>
    //         <p data-testid="price">{output}</p>
    //         <button onClick={updatePrice}>Apply Discount</button>
    //     </div>
    // );

    const [contentIsVisible, setContentIsVisible] = useState(false);
    function handleClick() {
        setContentIsVisible(true);
    }

    return (
        <>
            <p show={contentIsVisible}>Visible</p>
            <button onClick={handleClick}>Show Content</button>
            {/* <ul>
                {[1, 2, 3].map((number) => (
                    <li hey={number}>{number}</li>
                ))}
            </ul> */}
            <div>
                {[1, 2, 3].map((item) => (
                    <p>{item}</p>
                ))}
            </div>
        </>
    );
};

export default Test;
