"use client"

import { useState } from "react"

export default function Login() {

    const [usuario, setUsuario] = useState({
        "email":"",
        "senha":""
    })

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
                let status = response.json().status
                if(status){
                    console.log("Usuáro validado!")
                } else {
                    console.log("Usuáro invalidado!")
                }
            }

        } catch (error) {
            
        }
    }



  return (
    <div>
        <h1>INFORMAÇÕES DOS USUÁRIOS</h1>

        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>LOGIN</legend>
                    <div>
                        <label htmlFor="idEmail">EMAIL</label>
                        <input type="email" name="email" id="idEmail" placeholder="Digite o seu EMAIL:" value={usuario.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idSenha">SENHA</label>
                        <input type="password" name="senha" id="idSenha" placeholder="Digite o seu SENHA:" value={usuario.senha} onChange={handleChange}/>
                    </div>
                    <button>LOGIN</button>
                </fieldset>
            </form>
        </div>
    </div>
  )
}
