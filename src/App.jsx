import Biodata from "./components/Biodata";
import Header from "./components/Header";

function App() {
  const biodata = [
    {
      image: "public/398320375_1067312587959942_7930906810887531792_n.jpg",
      name: "Hanif Fauzan Nurrahman",
      email: "haniffauzann55@gmail.com",
      hobby: ["share meme" , "ngoding" , "nonton" , "joging"]
    },
  ];
  return (
    <>
      <Header />
      <div className="flex gap-5 flex-wrap bg-gradient-to-r from-slate-100 to-slate-500 p-6">
        {biodata.map((data)=>(
          <Biodata key={data} biodatasProps={data} />
        ))}
      </div>
    </>
  );
}

export default App;
