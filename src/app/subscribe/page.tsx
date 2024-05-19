"use client";
import { subscribe } from "@/src/actions/add.subscribe";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const username: string = searchParams.get("username")!;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await subscribe({ email: value, username })
      .then((res) => {
        setLoading(false);
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("You are successfully subscribed!");
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    setValue("");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl pb-8 font-semibold text-gray-900 capitalize">
          {username} NewsLetter
        </h1>
        <p className="text-2xl font-medium text-gray-900 pb-8">
          Enter your email and hit the subscribe button to receive all our news
          and exclusive benefits right in your inbox.
        </p>
      </div>
      <form
        className="flex w-full max-w-md border rounded overflow-hidden"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="email"
          name="email"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter your email"
          className="px-4 py-4 w-full text-gray-700 leading-tight focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-8 bg-blue-600 text-white font-bold py-4 rounded-r hover:bg-blue7600 focus:outline-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Page;
