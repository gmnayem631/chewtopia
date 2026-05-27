"use client";

import { formatDistanceToNow } from "date-fns";

const FeedbackCard = ({ feedback }) => {
  const { message, date } = feedback;

  const timeAgo = formatDistanceToNow(new Date(date), { addSuffix: true });

  return (
    <div
      style={{
        background: "var(--color-background-primary)",
        border: "0.5px solid var(--color-border-tertiary)",
        borderRadius: "var(--border-radius-lg)",
        padding: "1rem 1.25rem",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "15px",
          color: "var(--color-text-primary)",
          lineHeight: "1.6",
        }}
      >
        {message}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "0.5px solid var(--color-border-tertiary)",
          paddingTop: "12px",
        }}
      >
        <span
          style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}
        >
          {timeAgo}
        </span>

        <div style={{ display: "flex", gap: "8px" }}>
          <button
            className="btn"
            style={{
              fontSize: "13px",
              padding: "6px 14px",
              borderRadius: "var(--border-radius-md)",
              border: "0.5px solid var(--color-border-secondary)",
              background: "transparent",
              color: "var(--color-text-primary)",
              cursor: "pointer",
            }}
          >
            Update
          </button>
          <button
            className="btn"
            style={{
              fontSize: "13px",
              padding: "6px 14px",
              borderRadius: "var(--border-radius-md)",
              border: "0.5px solid var(--color-border-danger)",
              background: "transparent",
              color: "var(--color-text-danger)",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
