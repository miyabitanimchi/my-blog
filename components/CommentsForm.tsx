import React, { useState, useEffect } from "react";

const CommentsForm = ({ slug }: any) => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    storeData: true,
  });

  useEffect(() => {
    const userInfo: any = JSON.parse(
      localStorage.getItem("omiyaBlog:userInfo") || "{}"
    );
    const initalFormData = {
      ...formData,
      name: userInfo.name || "",
      email: userInfo.email || "",
    };
    setFormData(initalFormData);
  }, []);

  const handleCommentSubmit = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    console.log(name, email, comment);

    if (!comment || !name || !email) {
      setError(true);
      return;
    }
    const commentInfo = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem(
        "omiyaBlog:userInfo",
        JSON.stringify({ name, email })
      );
    } else {
      localStorage.removeItem("omiyaBlog:userInfo");
    }
  };

  const onInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { target }: any = e;
    if (target.type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Comment</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          onChange={onInputChange}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Comment"
          name="comment"
          value={formData.comment}
        ></textarea>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          onChange={onInputChange}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Name"
          name="name"
          value={formData.name}
        />
        <input
          type="text"
          onChange={onInputChange}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
          value={formData.email}
        />
      </div>
      {error && (
        <p className="text-xs text-red-400 ">All fields are required.</p>
      )}
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            value="true"
            type="checkbox"
            id="storeData"
            name="storeData"
            checked={formData.storeData}
          />
          <label
            htmlFor="storeData"
            className="text-gray-500 cursor-pointer ml-2"
          >
            Save my email and name for the next time I comment
          </label>
        </div>
      </div>
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
