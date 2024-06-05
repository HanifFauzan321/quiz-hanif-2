import { MessageCircle } from "lucide-react";

/* eslint-disable react/prop-types */
export default function Biodata({ biodatasProps }) {

    const showLike = () => {
        alert(`I Like ${biodatasProps.hobby}`);
      }
    const showComment = () => {
        let found = prompt("Enter your comments :");
         found === null ? alert("Oke, no problem") : alert("Please click the send icon");
     }
  return (
    <>
      <div className="min-w-80 mx-auto my-10 bg-blue-200 rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-48 object-cover bg-gradient-to-r from-blue-100 to-blue-500"
          src={biodatasProps.image}
          alt="Buah"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-950 mb-2">
            {biodatasProps.name}
          </h1>
          <p className="text-gray-900 mb-4">{biodatasProps.email}</p>
          <div className="flex items-center justify-between">
            <div className="gap-5">
              {biodatasProps.hobby.map((data) =>(
                <button className="m-4 border bg-black text-white rounded-lg shadow-md hover:text-red-600 " onClick={() => showLike()} key={data}>{data}</button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="text-green-400 hover:text-green-700"
              onClick={() => showComment()}>
              <MessageCircle />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
