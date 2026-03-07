import Section from "./section"
import Image from "next/image"

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
                        Telemetry Data
                    </h3>
                    <p>
                        Intel collects telemetry data from Windows client machines via the Driver and Client Applications (DCA) systems. The complete dataset contains information across 22 tables, linked by a unique device identifier (GUID). These tables include information about:
                    </p>
                    <ul style={{ paddingLeft: "40px", listStyleType: "square" }}>
                        <li>Hardware characteristics</li>
                        <li>Processor performance</li>
                        <li>Battery usage</li>
                        <li>Application activity</li>
                        <li>Browsing behavior</li>
                        <li>Network consumption</li>
                        <li>Memory usage</li>
                    </ul>

                    <p>
                        In our work, we create two DuckDB databases:
                    </p>
                    <ul style={{ paddingLeft: "40px", listStyleType: "square" }}>
                        <li>~5GB subsample for development</li>
                        <li>Full production database via SQL build script</li>
                    </ul>

                    <h3 className="text-2xl md:text-2xl font-semibold text-slate-800 mb-2">
                        Query Descriptions
                    </h3>

                    <p>
                        In this project, we work with 12 benchmark queries which Intel's engineering teams use for actual analysis. These queries represent analytical questions which reveal information ranging from battery health by geography, battery health by CPU generation, common software trends, to most popular browser by country.
                    </p>

                    <Image
                        src="/intel-telemetry/query_table.png"
                        alt="Query Categorization"
                        width={600}
                        height={600}
                    />
                    <Image
                        src="/intel-telemetry/query_wheel.png"
                        alt="Query Categorization"
                        width={700}
                        height={700}
                    />
                </div>
            </Section>
        </section>
    )
}