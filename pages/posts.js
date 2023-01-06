import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../utils/firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function Post() {
  //State of Form
  const [post, setPost] = useState({ description: "" });
  const [user, loading] = useAuthState(auth);
  const route = useRouter();

  // Journalize entry
  const submitPost = async (e) => {
    e.preventDefault();

    // Creating a post
    const collectionRef = collection(db, "posts");
    await addDoc(collectionRef, {
      ...post,
      timeStamp: serverTimestamp(),
      user: user.uid,
      avatar: user.photoURL,
      username: user.displayName,
    });
    setPost({ description: "" });
    return route.push("/");
  };

  return (
    <div className="my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto">
      <form onSubmit={submitPost}>
        <h1 className="text-2xl font-bold">Create a new post</h1>
        <div className="py-2">
          <h3 className="text-lg font-medium py-2">Description</h3>
          <textarea
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            className="bg-gray-800 g-48 w-full text-white rounded-lg p-2 text-sm"
          ></textarea>
          <p
            className={`${post.description.length > 300 ? "text-red-600" : ""}`}
          >
            {post.description.length}/300
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-slate-800 text-white font-medium p-2 my-5 rounded-lg text-sm"
        >
          Journalize!
        </button>
      </form>
    </div>
  );
}
