import Link from "next/link"
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1>HOME</h1>

      <div>
        <ul>
          <li><Link href="/produtos/tenis">Tênis</Link></li>
          <li><Link href="/produtos/calcas">Calças</Link></li>
          <li><Link href="/produtos/camisas">Camisas</Link></li>
        </ul>     
      </div>

      <Image src="/home.jpg"
            width={500}
            height={500}
            alt="Home"/>

    </>
  )
}
