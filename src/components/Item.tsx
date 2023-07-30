import React, { useState } from "react";
import Image from "next/image";
import item from "../images/classic-tee.jpg";
import { useQuery } from "react-query";
import { fetchItemFromAPI } from "./api";
import { formatPrice } from "./utils";
import Header from "./Header";

interface SizeOption {
  id: number;
  label: string;
}

const Item = () => {
  const { isLoading, error, data } = useQuery("item", fetchItemFromAPI);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeButtonClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      const itemToAdd = {
        ...data,
        selectedSize,
      };
      // get current cart items from local storage
      const existingCartItems = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );
      // add  new item
      existingCartItems.push(itemToAdd);
      // Save the updated cart back to local storage
      localStorage.setItem("cart", JSON.stringify(existingCartItems));
      alert(`Item "${data.title}" with size "${selectedSize}" added to cart!`);
    } else {
      alert("Please select a size before adding to cart.");
    }
  };

  // console.log(data);

  console.log(JSON.parse(localStorage.getItem("cart") || "[]"));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading item</div>;
  }
  return (
    <>
      {" "}
      <div className="mt-5 mx-10">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Header />
          <button className="-ml-32 hover:bg-gray-400 text-[#888888] font-bold py-2 px-4 rounded border-[#888888] border-2">
            My cart
          </button>{" "}
        </div>
      </div>
      <div className="container mx-auto p-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-4">
            <Image src={item} alt="item-cart" />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-[#222222]">{data.title}</h2>
              <p className="text-[#222222] font-bold">
                {formatPrice(data.price)}
              </p>
              <p className="text-[#888888]">{data.description}</p>
            </div>
            <div className="space-x-2">
              <p className="text-[#888888]">
                Size<span className="text-[#C90000]">*</span>
              </p>
              {data.sizeOptions.map((sizeOption: SizeOption) => (
                <button
                  className="hover:bg-gray-300 text-[#888888] font-bold py-2 px-4 rounded border-[#888888] border-2"
                  key={sizeOption.id}
                  onClick={() => handleSizeButtonClick(sizeOption.label)}
                >
                  {sizeOption.label}
                </button>
              ))}
            </div>
            <div className="mt-5">
              <button
                className="hover:bg-gray-400 text-[#222222] font-bold py-2 px-4 rounded border-[#222222] border-2"
                onClick={handleAddToCart}
              >
                Add to my cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
