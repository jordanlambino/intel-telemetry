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

export default function Home() {
  return (
    <main className="snap-y snap-proximity scroll-smooth">
      <ProgressBar/>
      <Title
        title="Balancing Privacy and Utility: Differentially Private Synthetic Data Generation for Intel Telemetry"
        subtitle=""
      />
      <Intro/>
      <Overview/>
      <Results/>
      <Methods/>
      <Discussion/>
    </main>
  );
}
