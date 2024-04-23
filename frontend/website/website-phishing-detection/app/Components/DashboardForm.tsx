'use client';
import { useState } from "react";
import Image from "next/image";
import GithubLogo from "@/public/githubicon/github-mark.svg";

export default function DashboardForm() {
    const [link, setLink] = useState("");
    const [result, setResult] = useState<number>(); // [phishing, not phishing, error
    const submitit = (e:any) => {
        e.preventDefault();
        fetch("http://localhost:5000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: link }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setResult(data.result);
            })
            .catch((err) => {
                console.log(err);
                setResult(0);
            });

        console.log(link);
    };
    const handleChange = (e:any) => {
        setLink(e.target.value);
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 gradientbody">
            
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
                        onChange={handleChange}
                    />
                    <button className="mt-4 bg-blue-500 text-white p-2 rounded-md">
                        Detect Phishing
                    </button>
                </form>
            </div>
            <div>
                {/* a div which shows the result */}
                {result === -1 && (
                    <div className="mt-8 p-4 bg-red-500 text-white rounded-md">
                        Phishing Website
                    </div>
                )}
                {result === 1 && (
                    <div className="mt-8 p-4 bg-green-500 text-white rounded-md">
                        Not a Phishing Website
                    </div>
                )}
                {result === 0 && (
                    <div className="mt-8 p-4 bg-red-500 text-white rounded-md">
                        Error
                    </div>
                )}
            </div>
            <div className="flex flex-col items-center">
                {/* <Image
                    src="/phishing-detection.png"
                    alt="Phishing Detection"
                    width={800}
                    height={500}
                /> */}
                <Image
                    src={GithubLogo}
                    alt="GitHub Repository"
                    width={80}
                    height={50}
                />
                <a
                    href="https://github.com/vikramsharma20025/phishing-website-detection"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-blue-500"
                >
                View the project
                </a>
            </div>
            <div>
                <nav className="flex justify-between w-full">
                    <div>
                        <a href="/about" className="text-blue-500">
                            About
                        </a>
                    </div>
                </nav>
            </div>
        </main>
    );
}