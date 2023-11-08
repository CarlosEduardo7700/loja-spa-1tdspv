"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function CadUser({params}) {

    // Redirect no 'use client'
    const router = useRouter()

    const [msgStatus, setMsgStatus] = useState("")
    const [classLoginMsg, setClassLoginMsg] = useState("")

    const [usuario, setUsuario] = useState({
        "name":"",
        "email":"",
        "senha":""
    })

    useEffect(() => {
        if(msgStatus == "Login realizado com sucesso!"){
            setClassLoginMsg("login-suc")
        } else if (msgStatus == "Usuário e/ou senha inválido! Tente novamente.") {
            setClassLoginMsg("login-err")
        } else {
            setClassLoginMsg("login")
        }
    }, [msgStatus])
    

    const handleChange = (e) => {
        const{name, value} = e.target

        setUsuario ({...usuario,[name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch("http://localhost:3000/api/base/base-users/0", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(usuario)
            });

            if(response.ok) {
                const status = await response.json()

                if(status.status == true){
                    
                    setMsgStatus("Login realizado com sucesso!")

                    setTimeout(()=>{
                        setMsgStatus("")
                        router.push("/")
                    }, 5000)

                } else {

                    setMsgStatus("Usuário e/ou senha inválido! Tente novamente.")

                    setTimeout(()=>{
                        setMsgStatus("")
                        setUsuario({
                            "name":"",
                            "email":"",
                            "senha":""
                        })
                    }, 5000)
                
                }
            }

        } catch (error) {
            
        }
    }



  return (
    <div>
        <h1>CADASTRO DE USUÁRIOS</h1>

        <h2 className={classLoginMsg}>{msgStatus}</h2>

        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Cadastrar</legend>

                    <div>
                        <label htmlFor="idNome">NOME</label>
                        <input type="text" name="nome" id="idNome" placeholder="Digite o seu NOME:" value={usuario.name} onChange={handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="idEmail">EMAIL</label>
                        <input type="email" name="email" id="idEmail" placeholder="Digite o seu EMAIL:" value={usuario.email} onChange={handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="idSenha">SENHA</label>
                        <input type="password" name="senha" id="idSenha" placeholder="Digite o seu SENHA:" value={usuario.senha} onChange={handleChange}/>
                    </div>

                    <div>
                        <button>Sign-in</button>
                    </div>

                    <div>
                        <p>Se você já possui registro. <Link href="/login">CLIQUE AQUI</Link>.</p>
                    </div>

                </fieldset>
            </form>
        </div>
    </div>
  )
}
