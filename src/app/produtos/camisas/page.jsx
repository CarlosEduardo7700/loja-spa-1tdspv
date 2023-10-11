import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Camisas() {
  return (
    <div>
        <h1>Camisas</h1>

        <Image src="/camisas.jpg"
            width={500}
            height={500}
            alt="Camisas"/>

        <p><strong>Descrição:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi ipsum impedit mollitia asperiores a quas esse odit cum laboriosam distinctio vitae fugit soluta, odio sequi, quo itaque, libero facilis quibusdam provident consequatur qui quos adipisci voluptate? Minima labore suscipit, nihil dolor aliquid qui distinctio eos rerum illum esse incidunt!</p>
        <Link href="/">Voltar...</Link>
    </div>
  )
}
