import Image from "next/image";
import Link from "next/link";
import Productslist from "./productslist/page";

export default function Home() {
  return (
   <>
  <main>
  <h1>Products List</h1>
  <Link href="/productslist"> click on meGo to Products List</Link>
  </main>
   
   </>
  );
}
