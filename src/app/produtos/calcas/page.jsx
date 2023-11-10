import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Calcas() {


  return (
    <div>
        <h1>Calças</h1>

        <Image src="/pants.jpg"
            width={500}
            height={500}
            alt="Calças"/>

        <p><strong>Descrição:</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus in deserunt ut autem error excepturi voluptatem, aperiam minus illum ab eligendi sequi maiores reiciendis porro repudiandae eos praesentium facilis perspiciatis quisquam. Dicta quibusdam obcaecati earum. Deleniti perspiciatis repudiandae ad itaque totam eum possimus ullam delectus voluptates incidunt, exercitationem voluptatum molestiae!</p>
        <Link href="/">Voltar...</Link>
    </div>
  )
}
