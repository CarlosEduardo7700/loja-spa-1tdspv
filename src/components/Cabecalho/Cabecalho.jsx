import React from 'react'
import Link from 'next/link'

export default function Cabecalho() {
  return (
    <header className='bg-slate-800 text-white'>
      <h1 className='text-center text-3xl font-extrabold'>PRODUTOS</h1>
      <hr className='border-red-700'/>
      <nav className="menu">
        <ul>
            <li><Link href="/produtos/tenis">Tênis</Link></li>
            <li><Link href="/produtos/calcas">Calças</Link></li>
            <li><Link href="/produtos/camisas">Camisas</Link></li>
            <li><Link href="/produtos/fazenda/loja/laticinios">Queijos</Link></li>
            <li><Link href="/user-pages">Git-Users</Link></li>
        </ul>
      </nav> 
    </header>
  )
}
