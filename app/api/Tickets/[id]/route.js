import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function Delete(req, { params }) {
    try {
        const { id } = params;
        await Ticket.findByIdAndDelete(id);

        return NextResponse.json(
            { message: "Ticked Deleted" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}
