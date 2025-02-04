const CoreConcepts = ({ title, description, image }, key) => {
    return (
        <li key={key}>
            <img src={image} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
};

export default CoreConcepts;
