"use client";
import { useState } from 'react';
import Image from "next/image";

export function Button() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <button
                onClick={handleClick}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-pink-700 px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
                rel="noopener noreferrer"
            >
                <Image
                    className="dark:invert h-[14px] w-4 invert"
                    src="/heart-icon.svg"
                    alt="heart icon"
                    width={16}
                    height={14}
                />
                Like!
            </button>
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-down">
                <p>
                    Already liked {count} times!
                </p>
            </div>
        </div>
    );
}