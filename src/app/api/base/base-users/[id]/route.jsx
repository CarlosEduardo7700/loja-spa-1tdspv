import {promises as fs} from "fs"
import { NextResponse } from "next/server"


export async function GET(request, {params}) {
    
    const file = await fs.readFile(process.cwd() + "/src/app/api/base/data.json", "utf8")

    const id = params.id;

    const usuarios = await JSON.parse(file)

    if(id > 0 && id <= usuarios.usuarios.length){
        return NextResponse.json(usuarios.usuarios.find((user) => user.id == id)) 
    } else {
        return id == 0 ? NextResponse.json(usuarios.usuarios) : NextResponse.redirect("http://localhost:3000/error")
    }

}

// LOGIN
const handleLogin = async (email, senha) => {
    const file = await fs.readFile(process.cwd() + "/src/app/api/base/data.json", "utf8")
    const usuarios = await JSON.parse(file)

    try{
        for (let x = 0; x < usuarios.usuarios.length; index++) {
            const userFile = usuarios.usuarios[x];

            if(userFile.email == email && userFile.senha == senha){
                return userFile;
            }
        }
    } catch(error) {
        console.log(error)
    }
}

export async function POST(request, response) {    
    const dataRequest = await request.json()

    if(dataRequest.info == "login"){
        return NextResponse.json(await handleLogin(dataRequest.email, dataRequest.senha))
    }

    return NextResponse.json({"status":false})

}