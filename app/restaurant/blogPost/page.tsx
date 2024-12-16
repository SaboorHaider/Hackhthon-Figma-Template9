import React from "react";
import Image from "next/image";
import { TiMessageTyping } from "react-icons/ti";
import { AiTwotoneLike } from "react-icons/ai";
import { LuShare2 } from "react-icons/lu";

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      image: "/blogimg1.jpg",
      alt: "A delicious burger with lettuce and tomato",
      date: "10 February 2022",
      title: "Pellentesque Efficitur Mi Aliquam Convallis Mi Quis",
    },
    {
      id: 2,
      image: "/blogimg2.jpg",
      alt: "A delicious pizza with various toppings",
      date: "10 February 2022",
      title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit",
    },
    {
      id: 3,
      image: "/blogimg3.jpg",
      alt: "A plate of tacos with various fillings",
      date: "10 February 2022",
      title: "Curabitur rutrum velit ac congue malesuada",
    },
  ];

  return (
    <div className="flex flex-col items-center p-6 bg-black text-white mb-10">
      <div className="text-center mb-8 ">
        <h1 className="text-4xl text-yellow-500 font-flower">Blog Post</h1>
        <h2 className="text-3xl">
          <span className="text-yellow-500">La</span>test News & Blog
        </h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-black rounded-sm overflow-hidden shadow-lg border-2 border-opacity-5 border-white transform transition duration-300 hover:scale-105 cursor-pointer"
          >
            <Image
              src={post.image}
              alt={post.alt}
              className="w-full h-48 object-cover"
              width={600}
              height={400}
            />
            <div className="p-4">
              <p className="text-yellow-500 text-sm mb-2">{post.date}</p>
              <h3 className="text-lg font-bold mb-4">{post.title}</h3>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-sm text-white hover:text-yellow-500"
                >
                  Learn More
                </a>
                <div className="flex space-x-2">
                  <a href="#" className="text-white">
                    <AiTwotoneLike />
                  </a>
                  <a href="#" className="text-yellow-500">
                    <LuShare2 />
                  </a>
                  <a href="#" className="text-white">
                    <TiMessageTyping />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
