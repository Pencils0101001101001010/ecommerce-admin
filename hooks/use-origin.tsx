import { useEffect, useState } from "react";

export const useOrigin = () => {
  const [mounted, setMounted] = useState(false);

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return "";
  }
  return origin;
};

// Why is this useful?

//     SSR Compatibility:
//         In server-side rendered environments (like Next.js), attempting to access window on the server will result in an error because window is only available in the browser. By checking for the existence of window and delaying access until the component is mounted, the hook prevents such issues.

//     Accessing the Current Origin:
//         This hook allows you to access the window.location.origin safely, which can be useful for generating absolute URLs or making decisions based on the origin of the application.
