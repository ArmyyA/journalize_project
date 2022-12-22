import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Nav() {
  const [user, loading] = useAuthState(auth);
  console.log(user);

  return (
    <nav className="flex justify-between items-center py-10">
      <Link href="/">
        <button className="text-slate-900 text-lg font-medium">
          Journal.ize
        </button>
      </Link>
      <ul className="flex items-center gap-10">
        {!user && (
          <Link
            href={"/auth/login"}
            className="py-2 px-4 text-xs bg-slate-900 text-white rounded-lg font-medium ml-8"
          >
            Join Now
          </Link>
        )}
        {user && (
          <div className="flex items-center gap-12">
            <Link className="font-medium" href="/posts">
              Post
            </Link>
            <Link href="/dashboard">
              <img
                className="w-8 rounded-full cursor-pointer"
                src={user.photoURL}
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
