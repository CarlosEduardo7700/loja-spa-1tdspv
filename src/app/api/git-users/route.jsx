import { NextResponse } from 'next/server';

export async function GET(request, {params}) {
    const response = await fetch("https://api.github.com/users");
    const users = await response.json();

    return NextResponse.json(users);
}
