import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../utils/firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Post() {
  return (
    <div className="my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto">
      <form action="">
        <h1 className="text-2xl font-semibold">Create a new post</h1>
        <div className="py-2">
          <h3 className="text-lg font-medium py-2">Description</h3>
          <textarea></textarea>
          <p>0/300</p>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
