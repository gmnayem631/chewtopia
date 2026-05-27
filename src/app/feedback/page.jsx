import FeedbackCard from "@/components/cards/FeedbackCard";
import React from "react";

export const metadata = { title: "Feedbacks" };

const getFeedback = async () => {
  const res = await fetch("http://localhost:3000/api/feedback/");
  return await res.json();
};

const FeedbackPage = async () => {
  const feedback = await getFeedback();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {feedback.map((item) => (
        <FeedbackCard key={item._id} feedback={item} />
      ))}
    </div>
  );
};

export default FeedbackPage;
