import { JSX } from "react";

export default function CountIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2">
      <path d="M12 12h9m-9 6h9M12 6h9M3 8.105 4.897 10a12.144 12.144 0 0 1 3.694-4M3 16.105 4.897 18a12.144 12.144 0 0 1 3.694-4" />
    </svg>
  )
}
