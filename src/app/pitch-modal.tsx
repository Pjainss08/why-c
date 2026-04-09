"use client";

import { useState } from "react";

export function PitchModal() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "rejections@whycombinator.in";

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer font-sans text-base leading-[1.12] tracking-[-0.6px] text-black md:text-xl"
      >
        I will Pitch
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setOpen(false)}
        >
          <div
            className="mx-4 flex max-w-[400px] flex-col items-center gap-5 rounded-2xl bg-cream px-8 py-10 text-center shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-serif text-lg leading-[1.5] text-ink md:text-xl">
              Cold mail us at{" "}
              <span className="font-medium">{email}</span>{" "}
              with your startup idea.
            </p>
            <button
              onClick={copyEmail}
              className="cursor-pointer rounded-full border border-ink px-5 py-2 font-sans text-sm tracking-[0.4px] text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              {copied ? "Copied!" : "Copy email"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
