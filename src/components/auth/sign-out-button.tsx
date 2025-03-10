import { signOut } from "@/actions/auth.action";

export default function SignOutButton() {
  return <button onClick={signOut}>Sign Out</button>;
}
