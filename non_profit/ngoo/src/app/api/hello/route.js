import { NextResponse } from "next/server"

export async function GET(req, res) {
    const data = [721443, 789456, 700001];
    return NextResponse.json(data, {status:200})
}