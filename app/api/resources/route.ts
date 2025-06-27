// app/api/resources/route.ts (GET all, POST new)
import { NextRequest, NextResponse } from "next/server";
import { DatabaseService } from "@/lib/appwrite/database";
import { appwriteConfig } from "@/lib/appwrite/config";

export async function GET() {
  try {
    const data = await DatabaseService.getResources();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("GET /api/resources error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const document = await DatabaseService.createResource(body);
    return NextResponse.json({ success: true, document });
  } catch (error) {
    console.error("POST /api/resources error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
