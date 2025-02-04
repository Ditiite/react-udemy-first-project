import { CORE_CONCEPTS } from "../../data.js";
import CoreConcept from "./CoreConcept.jsx";

const CoreConncepts = () => {
    return (
        <section id="core-concepts">
            <h2>Time to get started!</h2>
            <ul>
                {CORE_CONCEPTS.map((concept, i) => (
                    <CoreConcept key={concept.title} {...concept} />
                ))}
            </ul>
        </section>
    );
};

export default CoreConncepts;
