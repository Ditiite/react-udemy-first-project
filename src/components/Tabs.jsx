const Tabs = ({ children, buttons, ButtonContainer = "menu" }) => {
    // const ButtonContainer = buttonsContainer;
    return (
        <>
            <ButtonContainer>{buttons}</ButtonContainer>
            {/* <menu>{buttons}</menu> */}
            {children}
        </>
    );
};

export default Tabs;
