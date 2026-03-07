import Section from "./section"

export default function Discussion() {
    return (
        <section id="discussion">
            <Section title="Discussion">
                <div className="space-y-8">
                <h3 className="text-2xl md:text-2xl font-semibold text-slate-800 mb-2">
                    Analysis of Results
                </h3>
                <p>
                    Provide discussion of results, highlight important takeaways.
                </p>

                <h3 className="text-2xl md:text-2xl font-semibold text-slate-800 mb-2">
                    Limitations
                </h3>
                <p>
                    Discuss limitations of project, how the project scope/boundary impacted the results.
                </p>

                <h3 className="text-2xl md:text-2xl font-semibold text-slate-800 mb-2">
                    Future Outlook
                </h3>
                <p>
                    Provide details on next steps, roadmap, etc.
                </p>
                </div>
            </Section>
        </section>
    )
}