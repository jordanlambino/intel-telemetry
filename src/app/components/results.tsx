import Section from "./section"

export default function Results() {
    return (
        <section id="results">
            <Section title="Results">
                <div className="space-y-8">
                    <p>
                        Key results -- include evidence / visualizations
                    </p>

                    <p>
                        Here we report results from the mini (subsample) and full databases.
                    </p>

                    <h3 className="text-2xl md:text-2xl font-semibold text-slate-800 mb-2">
                        Privacy vs. Utility Tradeoff
                    </h3>

                    <h3 className="text-2xl md:text-2xl font-semibold text-slate-800 mb-2">
                        Mechanism Comparison
                    </h3>

                    <h3 className="text-2xl md:text-2xl font-semibold text-slate-800 mb-2">
                        Optimal Epsilon Parameter
                    </h3>
                </div>
            </Section>
        </section>
    )
}