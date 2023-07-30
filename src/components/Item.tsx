import Image from "next/image";
import item from "../images/classic-tee.jpg";
import { useQuery } from "react-query";
import { fetchItemFromAPI } from "./api";
import { formatPrice } from "./utils";

const Item = () => {
  const { isLoading, error, data } = useQuery("item", fetchItemFromAPI);

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading item</div>;
  }
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <Image src={item} alt="item-cart" />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Classic Tee</h2>
            <p className="text-gray-600">{formatPrice(data.price)}</p>
            <p className="text-gray-600">
              Description Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </div>
          <div className="space-x-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              S
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              M
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              L
            </button>
          </div>
          <div className="mt-5">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Add to my cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
