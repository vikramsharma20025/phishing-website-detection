import Image from "next/image";
import { Input } from "postcss";

export default function Home() {
  const 
  const submitit = (e) => {
    e.preventDefault();
    const link = e.target[0].value;
    console.log(link);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center">
          Website Phishing Detection
        </h1>
        <p className="text-center mt-4">
          A machine learning model that detects phishing websites.
        </p>
      </div>
      <div>
        {/* a form which takes link and has a submit button */}
        <form
        className="flex flex-col items-center mt-8"
        onSubmit={submitit}
        >
          <input
            type="text"
            placeholder="Enter a link"
            className="p-2 border border-gray-300 rounded-md"
          />
          <button className="mt-4 bg-blue-500 text-white p-2 rounded-md">
            Detect Phishing
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/phishing-detection.png"
          alt="Phishing Detection"
          width={800}
          height={500}
        />
        <a
          href="
          https://colab.research.google.com/drive/1zj9U1F7j5n2tCg2dJ3Q4e7ZQVn6y6Z5c?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-blue-500"
        >
          View the project
        </a>
      </div>

    </main>
  );
}
