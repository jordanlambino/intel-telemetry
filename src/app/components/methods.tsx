import Section from "./section"

export default function Methods() {
    return (
        <section id="methods">
            <Section title="Methods">
                <div className="space-y-8">
                    <p>
                        Summary of approach & methods
                    </p>

                    <h3 className="text-2xl md:text-2xl font-semibold text-slate-800 mb-2">
                        Differential Privacy
                    </h3>
                    <p>
                        Differential privacy provides a mathematical framework, guaranteeing that the output of a query is unaffected by the inclusion or exclusion of a single individual record from the dataset.
                    </p>
                    
                    <p>
                        Informally, [provide informal explanation].
                    </p>

                    <p>
                        Mathematically, differential privacy is represented by the following equation:
                    </p>
                
                    <ul style={{ paddingLeft: "40px", listStyleType: "square" }}>
                            <li>Where e=epsilon -- the privacy parameter which controls the privacy-utility trade-off</li>
                            <li>Smaller values of e result in stronger privacy at the cost of utility</li>
                        </ul>
                    <h3 className="text-2xl md:text-2xl font-semibold text-slate-800 mb-2">
                        Contribution Bounding
                    </h3>

                    <h3 className="text-2xl md:text-2xl font-semibold text-slate-800 mb-2">
                        Privacy Mechanisms
                    </h3>
                    <p>
                        In order to guarantee individual privacy, we add noise to the query otuputs using two differential privacy mechanisms: (show table).
                    </p>

                    <h3 className="text-2xl md:text-2xl font-semibold text-slate-800 mb-2">
                        Privacy Budget
                    </h3>

                    <h3 className="text-2xl md:text-2xl font-semibold text-slate-800 mb-2">
                        Evaluation Metrics
                    </h3>
                </div>
            </Section>
        </section>
    )
}