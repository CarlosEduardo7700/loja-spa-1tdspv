import Link from 'next/link'
import Image from 'next/image'

export default function Tenis(){
    return(
        <div>
            <h1>Tênis</h1>

            <Image src="/tenis.jpg"
            width={500}
            height={500}
            alt="Tênis"/>

            <div>
                <p><strong>Descrição:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ut maxime corrupti beatae, illo modi ipsa molestias sapiente velit autem hic! Et ipsa atque, similique libero optio recusandae repellat cum consequuntur, molestias voluptas architecto. Officiis, sed dolorum. Consectetur, quia nulla quam voluptatibus corporis consequatur fuga accusantium amet eligendi, at ipsum?</p>
                <Link href="/">Voltar...</Link>
            </div>
        </div>
    )
}