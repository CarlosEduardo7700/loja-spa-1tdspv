
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1>HOME</h1>

      <div>
        <figure>
          <Image src="/home.jpg"
              width={500}
              height={500}
              alt="Home"/>
        </figure>
      </div>



    </>
  )
}
