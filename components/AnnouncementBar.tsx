"use client";

import { useState, useEffect } from "react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("ab-dismissed")) setVisible(true);
    } catch {
      // localStorage unavailable
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem("ab-dismissed", "1");
    } catch {
      // localStorage unavailable
    }
  };

  if (!visible) return null;

  return (
    <div className="relative z-40 flex items-center justify-center gap-3 bg-[var(--accent)] px-6 py-2 text-xs font-semibold text-white">
      <span>SAM.gov Registered&nbsp;&middot;&nbsp;NAICS 541611&nbsp;&middot;&nbsp;Now Accepting Partnerships</span>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
      >
        &times;
      </button>
    </div>
  );
}
