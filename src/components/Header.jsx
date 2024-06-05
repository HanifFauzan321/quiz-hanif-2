import { Book } from "lucide-react";

export default function Header() {


  return (
    <>
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <Book />
            <h1 className="text-3xl font-bold hover:cursor-none ">My Biodata</h1>
          </div>
        </div>
      </header>
    </>
  );
}
