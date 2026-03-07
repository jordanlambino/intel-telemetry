export default function Intro() {
    return (
        <div className="bg-gray-100 text-black py-12 px-10 shadow-inner">
            <div className="max-w-4xl mx-auto px-6 text-lg leading-relaxed space-y-8">
                <p>
                    Hardware and software vendors such as Intel rely on telemetry to understand how products behave in the field. They need aggregate statistics on battery usage, display and power metrics, adoption of features and configurations, and failure or performance patterns by geography, device type, and workload.
                </p>
                <p>
                    These insights drive quality improvement, support prioritization, and product planning. To obtain them, vendors collect event logs and system attributes from participating devices: each record is associated with a device identifier (typically a GUID), and data is shipped to central systems for aggregation and analysis. The resulting datasets are large, high-dimensional, and user-level, which makes them valuable for analytics but also sensitive.
                </p>
                <p>
                    Releasing aggregate statistics, even after stripping direct identifiers, can still enable re-identification or linkage when combined with other information. The tension between the need for actionable insights and the obligation to protect individuals is the problem we address.
                </p>
            </div>
        </div>
    )
}