import Section from "./section"

export default function Overview() {
    return (
        <section id="overview">
            <Section title="Project Overview">
                <div className="space-y-8">
                    <p>
                        Project overview -- high level, include clear problem statement
                    </p>

                    <p>
                        In this work we apply differentially private query release to Intel telemetry: we answer a fixed set of analytical queries by adding calibrated noise to their outputs after bounding each device’s contribution via clipping, and we evaluate two standard mechanisms (Laplace and Analytic Gaussian) on mini and full databases.
                    </p>
                    <h3 className="text-2xl md:text-2xl font-semibold text-slate-800 mb-2">
                        Differential Privacy
                    </h3>
                    <h3 className="text-2xl md:text-2xl font-semibold text-slate-800 mb-2">
                        Telemetry Data
                    </h3>
                    <p>
                        Explanation of telemetry data.
                    </p>

                    <h3 className="text-2xl md:text-2xl font-semibold text-slate-800 mb-2">
                        Query Descriptions
                    </h3>

                    <p>
                        Provide descriptions for 12 queries (can embed from report?)
                    </p>
                </div>
            </Section>
        </section>
    )
}