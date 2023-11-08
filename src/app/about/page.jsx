"use client"
import { useRouter, } from "next/navigation";



// export const metadata = {
//   title: "Acerca de Nosotros",
// };

const AboutPage = () => {
  const router = useRouter();
  return (
    <section>
      <h1>AboutPage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        perspiciatis corrupti, repellendus deleniti blanditiis eos nulla
        voluptatum, quaerat soluta fuga laborum nesciunt ut iure dolorum eum
        eaque minima accusamus ipsa facilis ducimus! Maxime, dolorem nihil! Esse
        laudantium, officiis eligendi voluptatem voluptates delectus corporis.
        Officiis consectetur numquam at aliquid. Atque ipsa temporibus ullam
        obcaecati consequatur laboriosam, earum nam nobis vero fugiat. Vel
        doloremque, laboriosam cumque obcaecati, nobis numquam soluta voluptas
        voluptatem autem eum necessitatibus. Consequuntur blanditiis asperiores
        veritatis voluptatibus incidunt ab ducimus dignissimos, velit animi
        perferendis, maxime iusto quidem illum ipsam in hic sequi dolorum
        voluptas est officiis. Nobis, commodi at.
      </p>
      <button
        className="bg-sky-400 px-3 py-2 rounded-md"
        onClick={() => {
          alert("Ejecutando Código");
          router.push("/");
        }}
      >
        Click!
      </button>
    </section>
  );
};


export default AboutPage;
