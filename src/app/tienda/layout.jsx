import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Tienda Oficial NextJS",
};

const TiendaLayout = ({ children }) => {
  return (
    <>
      <nav>
        <h1>Seccion Tienda</h1>
        <ul>
          <li>
            <Link href="/tienda/categorias">Categoría</Link>
          </li>
          <li>
            <Link href="/tienda/categorias/computadoras">Computadora</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default TiendaLayout;
