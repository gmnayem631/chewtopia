import { feedback } from "../../route";

export async function GET(request, { params }) {
  const { id } = await params;

  const singleFeedback = feedback.find((fd) => fd.id == id) || {};

  if (!singleFeedback) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }
  return Response.json(singleFeedback);
}
