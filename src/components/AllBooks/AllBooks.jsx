import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
  {
    id: 1,
    img: Book1,
    title: "Who's there",
    rating: 5.0,
    author: "Victor.E",
  },
  {
    id: 2,
    img: Book2,
    title: "His Life",
    rating: 4.5,
    author: "Chike",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost boys",
    rating: 4.7,
    author: "Vcee",
  },
  {
    id: 4,
    img: Book2,
    title: "His Life",
    rating: 4.4,
    author: "Ezeirunne",
  },
  {
    id: 5,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Chibuike",
  },
];
const AllBooks = () => {
  return (
    <>
      <div className="py-10">
        <div className="container py-10">
          {/* header*/}
          <div
            data-aos="slide-up"
            className="text-center mb-20 max-w-[400px] mx-auto"
          >
            <p
              className="text-sm bg-clip-text text-transparent
            bg-gradient-to-r from-primary to-secondary"
            >
              Best Books
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              labore ab fugiat.
            </p>
          </div>
          {/* card */}
          <div data-aos="slide-up">
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
             place-items-center gap-5 "
            >
              {BooksData.map((book) => (
                <div className="space-y-3">
                  <img
                    src={book.img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover 
                            rounded-md"
                  />
                  <div>
                    <h2 className="font-semibold">{book.title}</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      {" "}
                      {book.author}
                    </p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{book.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                className="text-center mt-10 cursor-pointer bg-primary text-white 
                py-2 px-5 rounded-full"
              >
                Viwe All Books
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooks;
