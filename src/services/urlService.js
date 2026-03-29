import { BASE_URL } from "../constants/api";

export const shortenUrl = async (data) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${BASE_URL}/shorten`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to shorten URL");
  }

  return response.json();
};