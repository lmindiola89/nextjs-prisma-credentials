import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function Navbar() {
  const session = await getServerSession(authOptions);
  // console.log(session.user.name);
  return (
    <nav className="flex justify-between items-center bg-gray-950 text-white px-24 py-3">
      <h1 className="text-xl font-bold">
        <Link href={"/"}>NextAuth</Link>
      </h1>
      <ul className="flex gap-x-2">
        {!session?.user ? (
          <>
            <li>
              <Link href={"/auth/register"}>Register</Link>
            </li>
            <li>
              <Link href={"/api/auth/signin"}>Login</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link href={"/settings"}>Settings</Link>
            </li>

            <li>
              <Link href={"/api/auth/signout"}>Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
