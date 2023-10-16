import Card from "../../components/Card/Card";

const myAttributes = [
  {
    title: "Design Forward",
    description:
      "I love that any kind of vision can be made a reality with the right code. I always wanted to be an artist, and from a young age I watched my older brothers become illustrators.",
  },
  {
    title: "Detail Driven",
    description:
      "I love that any kind of vision can be made a reality with the right code. I always wanted to be an artist, and from a young age I watched my older brothers become illustrators.",
  },
  {
    title: "Intentional",
    description:
      "I love that any kind of vision can be made a reality with the right code. I always wanted to be an artist, and from a young age I watched my older brothers become illustrators.",
  },
];

function Attributes() {
  return (
    <section id="attributes-section">
      <Card />
      <Card />
      <Card />
    </section>
  );
}

export default Attributes;
