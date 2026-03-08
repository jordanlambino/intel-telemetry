import Link from "next/link"

import DifferentialPrivacy from "./components/dp"
import Methods from "./components/methods"
import Results from "./components/results"
import Discussion from "./components/discussion"
import Conclusion from "./components/conclusion"
import Title from "./components/title"
import Overview from "./components/overview"
import Intro from "./components/intro"

import ProgressBar from "../features/progressbar"
import Contact from "./components/contact"

import TableOfContents from "./components/tableofcontents"

export default function Home() {
  return (
    /*
    <div className="text-red-400 text-6xl font-bold">
      Tailwind test
    </div>
    */
    <main className="ml-40 scroll-smooth">
      <ProgressBar/>
      <Title
        title="Balancing Privacy and Utility: Differentially Private Synthetic Data Generation for Intel Telemetry"
        subtitle=""
      />

      <TableOfContents/>
      <Intro/>
      <Overview/>
      <Results/>
      <Methods/>
      <Discussion/>
    </main>
    
  );
}
