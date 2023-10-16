import DetailBar from "../../components/Detail Bar/DetailBar";

const mySkills = [
  {
    title: "Node.js",
    description: "Runtime",
  },
  {
    title: "React",
    description: "Framework",
  },
  {
    title: "Express.js",
    description: "Framework",
  },
  {
    title: "Adobe Creative Suite",
    description: "Design Tool",
  },
  {
    title: "Wordpress",
    description: "CMS",
  },
  {
    title: "Figma",
    description: "Design Tool",
  },
  {
    title: "HTML, CSS, Javascript",
    description: "Languages",
  },
];

function Skills() {
  return (
    <section id="skills-section">
      <div className="flex-container">
        <DetailBar />
        <DetailBar />
        <DetailBar />
        <DetailBar />
        <DetailBar />
        <DetailBar />
        <DetailBar />
      </div>
    </section>
  );
}

export default Skills;
