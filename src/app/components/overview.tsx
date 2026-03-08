import Section from "./section"
import Image from "next/image"

export default function Overview() {
    return (
        <section id="overview">
            <Section title="Project Overview">
                <div className="space-y-8">
                    <h3 className="text-2xl md:text-2xl font-semibold text-slate-800 mb-2">
                        The Problem: Telemetry Analytics vs. Privacy
                    </h3>
                    <p>
                        Modern hardware and software systems collect telemetry data to analyze device usage in real world environments. The data are stored in logs which reveal useful insights for analyzing and improving product performance, reliability, and feature adoption. However, these datasets often contain detailed, device-specific information that can induce privacy risks, even when user “anonymity” is guaranteed.
                    </p>

                    <p>
                        This project investigates how differential privacy can enable the release of telemetry aggregates or statistics while protecting individual privacy. We implement a differentially private query-release pipeline that introduces calibrated noise to aggregate queries while clipping each device’s contribution to the results.
                    </p>
                    <h3 className="text-2xl md:text-2xl font-semibold text-slate-800 mb-2">
                        Telemetry Dataset
                    </h3>
                    <p>
                        The dataset used in this study contains Intel telemetry logs collected from real-world devices. Each record is associated with a unique device identifier (GUID) and describes system events, such as battery usage, power consumption, browser activity, and hardware configuration. 
                    </p>
                        The raw telemetry data contains 23 source tables, which we transform into 22 reporting tables after pre-processing via SQL build scripts. These reporting tables simplify complex SQL joins and allow the execution of 12 benchmark analytical queries used for evaluation.
                    <p>

                    </p>
                    

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
                        As noted above, we work with 12 benchmark queries which Intel's engineering teams use for actual analysis. These queries represent analytical questions which reveal information ranging from battery health by geography, battery health by CPU generation, common software trends, to most popular browser by country. These queries provide a meaningful testbed for evaluating the effectiveness of differential privacy, along with finding an optimal balance between privacy and utility.
                    </p>

                    <Image
                        src="/intel-telemetry/query_table.png"
                        alt="Query Table"
                        width={600}
                        height={600}
                    />
                    <Image
                        src="/intel-telemetry/query_wheel.png"
                        alt="Query Categorization"
                        width={700}
                        height={700}
                    />

                    <h3 className="text-2xl md:text-2xl font-semibold text-slate-800 mb-2">
                        Differential Privacy Pipeline
                    </h3>
                    <ul style={{ paddingLeft: "40px", listStyleType: "number" }}>
                        <li><strong>Load the raw telemetry data</strong> into DuckDB. Run the build step to produce 22 reporting tables.</li>
                        <li><strong>Run the 12 benchmark queries</strong> with per-GUID clipping in SQL to obtain the non-private baseline.</li>
                        <li><strong>Run the Laplace and Analytic Gaussian mechanism</strong> at each &epsilon; in  ε ∈ {`{`}0.01, 0.05, 0.1, 0.5, 1.0, ∞{`}`} (with ∞ representing no-noise reference) for both baseline and advanced variants.</li>
                        <li><strong>Compute utility scores</strong> by median relative error, total variation distance, and Spearman rank correlation.</li>
                        <li>Evaluation computes <strong>per-query statistics</strong> and <strong>Laplace vs. Gaussian comparison</strong> across &epsilon;.</li>
                        <li>Evaluation outputs <strong>privacy-utility tradeoff</strong> curves, pass rate, and Pareto frontier metrics.</li>
                    </ul>
                    <p>The flowchart below illustrates the complete pipeline for this study:</p>
                    <Image
                        src="/intel-telemetry/dp_pipeline.png"
                        alt="DP Pipeline"
                        width={800}
                        height={1200}
                    />
                </div>
            </Section>
        </section>
    )
}