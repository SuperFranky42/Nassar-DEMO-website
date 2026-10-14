const SESSION_KEY = "nassar-demo-session";

const staff = {
  email: "staff@nassar.demo",
  password: "workshop",
};

export const demoStaff = {
  email: staff.email,
  password: staff.password,
};

export function isSignedIn() {
  try {
    return localStorage.getItem(SESSION_KEY) === "staff";
  } catch {
    return false;
  }
}

export function signIn(email: string, password: string) {
  const matches =
    email.trim().toLowerCase() === staff.email && password === staff.password;
  if (!matches) return false;
  localStorage.setItem(SESSION_KEY, "staff");
  return true;
}

export function signOut() {
  localStorage.removeItem(SESSION_KEY);
}
