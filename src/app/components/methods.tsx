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
                        Our Pipeline
                    </h3>

                    <h3 className="text-2xl md:text-2xl font-semibold text-slate-800 mb-2">
                        Privacy Mechanisms
                    </h3>

                    <h3 className="text-2xl md:text-2xl font-semibold text-slate-800 mb-2">
                        Privacy Budget
                    </h3>
                </div>
            </Section>
        </section>
    )
}