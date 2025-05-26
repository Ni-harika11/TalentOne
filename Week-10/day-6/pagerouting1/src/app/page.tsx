import Contact from "@/components/Contact";
import Link from "next/link";
 
export default function Home() {
  return (
      <>
     <div>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
     </div>
      </>
  );
}
