import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=shahzi113awan`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

   return data;
};

export default async function Home() {
  const blogs = await getData();
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
 <section id="github-contributions">
            <h2>GitHub Contributions</h2>
            <div class="github-chart">
                <img src="https://ghchart.rshah.org/shahzaib-manzoor" alt="GitHub Contributions Chart"/>
            </div>
        </section>
      <ContactSection />
    </>
  )
};
