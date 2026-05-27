const shimmer = `
  @keyframes shimmer {
    0% { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
`;

const skeletonStyle = {
  background:
    "linear-gradient(90deg, var(--color-background-secondary) 25%, var(--color-background-tertiary) 50%, var(--color-background-secondary) 75%)",
  backgroundSize: "800px 100%",
  animation: "shimmer 1.4s ease-in-out infinite",
  borderRadius: "var(--border-radius-md)",
};

const FeedbackCardSkeleton = () => (
  <>
    <style>{shimmer}</style>
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
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div style={{ ...skeletonStyle, height: "14px", width: "100%" }} />
        <div style={{ ...skeletonStyle, height: "14px", width: "75%" }} />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "0.5px solid var(--color-border-tertiary)",
          paddingTop: "12px",
        }}
      >
        <div style={{ ...skeletonStyle, height: "12px", width: "80px" }} />
        <div style={{ display: "flex", gap: "8px" }}>
          <div
            style={{
              ...skeletonStyle,
              height: "30px",
              width: "70px",
              borderRadius: "var(--border-radius-md)",
            }}
          />
          <div
            style={{
              ...skeletonStyle,
              height: "30px",
              width: "60px",
              borderRadius: "var(--border-radius-md)",
            }}
          />
        </div>
      </div>
    </div>
  </>
);

export default FeedbackCardSkeleton;
