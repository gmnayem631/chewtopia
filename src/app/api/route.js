export const feedback = [
  { id: 1, message: "Food was great" },
  { id: 2, message: "You should add more items" },
];
export async function GET(request) {
  return Response.json({
    status: 200,
    message: "API is running",
  });
}
