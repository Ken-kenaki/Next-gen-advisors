// app/api/resources/[id]/route.ts (GET single, PUT update, DELETE)
import { NextRequest, NextResponse } from "next/server";
import { DatabaseService } from "@/lib/appwrite/database";
import { appwriteConfig } from "@/lib/appwrite/config";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const document = await DatabaseService.getResource(params.id);
    return NextResponse.json({ success: true, document });
  } catch (error) {
    console.error("GET /api/resources/:id error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const updated = await DatabaseService.updateResource(params.id, body);
    return NextResponse.json({ success: true, updated });
  } catch (error) {
    console.error("PUT /api/resources/:id error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await DatabaseService.deleteResource(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/resources/:id error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
