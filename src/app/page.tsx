import Image from "next/image";
import Button from "./components/button"
import Nobutton from "./components/nobutton"
export default function Home() {
  return (
    <div className="h-screen bg-pink-400 grid grid-cols-3 gap-2 grid-rows-3"> 
      <div className="flex justify-center items-center col-span-3  row-start-1 row-end-2">
        <h1 className="text-white text-4xl  ">{`Will you be my pookie this Valentine's?`}</h1>
      </div>
      <div className="flex justify-center  col-start-2 cold-end-3  row-start-2 row-end-3">
        <div className="text-white text-4xl mt-[-150px]">
        <Image
          src="/p2.png"
          width={1000}
          height={1000}
          alt="cat pic"
        /> 
        <div className="grid place-items-center">
          <Button></Button>
          <Nobutton></Nobutton>
        </div>

        </div>
      </div>
    </div>
 
  );
}
