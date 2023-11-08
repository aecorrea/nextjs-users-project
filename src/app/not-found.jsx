import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <section>
        <h1>Error 404</h1>
        <h3>Page Not Found</h3>
        <Link href="/">Volver al Inicio</Link>

    </section>
  )
}

export default NotFound