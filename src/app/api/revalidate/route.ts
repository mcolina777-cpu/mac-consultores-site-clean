import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const token = request.headers.get("x-revalidate-token");
  const expectedToken = process.env.REVALIDATE_TOKEN;

  if (!expectedToken) {
    return NextResponse.json(
      { error: "REVALIDATE_TOKEN no configurada" },
      { status: 500 }
    );
  }

  if (!token || token !== expectedToken) {
    return NextResponse.json(
      { error: "Token inválido" },
      { status: 401 }
    );
  }

  revalidatePath("/");
  return NextResponse.json({ ok: true, path: "/" });
}
