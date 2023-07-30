import Image from "next/image";
import { Inter } from "next/font/google";
import item from "../images/classic-tee.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-wrap">
        {/* First box with image */}
        <div className="w-full md:w-1/2 p-4">
          <Image src={item} alt="item-cart" />
        </div>
        {/* Second box with text */}
        <div className="w-full md:w-1/2 p-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Title</h2>
            <p className="text-gray-600">
              Description Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
