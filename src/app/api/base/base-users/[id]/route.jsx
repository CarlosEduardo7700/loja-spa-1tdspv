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


export async function POST(request, response) {
    const file = await fs.readFile(process.cwd() + "/src/app/api/base/data.json", "utf8")
    
    const usuarios = await JSON.parse(file)
    
    const userRequest = await request.json()

    try{
        for (let x = 0; x < usuarios.usuarios.length; index++) {
            const userFile = usuarios.usuarios[x];

            if(userFile.email == userRequest.email && userFile.senha == userRequest.senha){
                return NextResponse.json({"status":true})
            }
        }
    } catch(error) {
        console.log(error)
    }

    return NextResponse.json({"status":false})

}