import React from 'react'
import Link from 'next/link'

export default function Cabecalho() {
  return (
    <header>
      <ul>
          <li><Link href="/produtos/tenis">Tênis</Link></li>
          <li><Link href="/produtos/calcas">Calças</Link></li>
          <li><Link href="/produtos/camisas">Camisas</Link></li>
      </ul> 
    </header>
  )
}
