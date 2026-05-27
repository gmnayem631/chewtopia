import { connect } from "@/app/lib/dbConnect";

export async function GET(request) {
  const feedbackCollection = await connect("feedbacks");
  const result = await feedbackCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const { message } = await request.json();
  const feedbackCollection = await connect("feedbacks");

  if (!message || typeof message !== "string") {
    return Response.json(
      {
        message: "please send a message",
      },
      { status: 400 },
    );
  }

  const newFeedback = { message, date: new Date().toISOString() };
  const result = await feedbackCollection.insertOne(newFeedback);

  return Response.json(result);
}
