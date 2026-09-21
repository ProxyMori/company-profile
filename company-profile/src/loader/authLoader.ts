import { redirect } from "react-router";

export function authLoader() {
  const userToken = localStorage.getItem("userToken");

  if (!userToken) {
    return redirect("/login");
  }

  return null;
}
