import { faL } from "@fortawesome/free-solid-svg-icons";
import { spawn } from "child_process";
import React, { useState, useEffect, useRef } from "react";

const CommentsForm = ({ slug }: any) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef<HTMLTextAreaElement>(null);
  const nameEl = useRef<HTMLInputElement>(null);
  const emailEl = useRef<HTMLInputElement>(null);
  const storeDetaEl = useRef();

  const handleCommentSubmit = () => {};

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Comment</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Comment"
          name="comment"
        ></textarea>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          ref={nameEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          ref={emailEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
        />
      </div>
      {error && (
        <p className="text-xs text-red-400 ">All fields are required.</p>
      )}
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={handleCommentSubmit}
          className="transition duration-300 ease hover:bg-pink-600 inline-block bg-pink-400 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="text-sm float-right font-semibold text-green-400">
            Comment submitted for review!
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
