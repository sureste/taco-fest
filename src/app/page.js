import Image from "next/image";


export default function Home() {
  return (
    <main className="">
      <div className="bg-cover bg-background1 bg-no-repeat flex flex-col items-center align-bottom  pt-16 ">
        {/* Header */}
        <div className="pb-11 self-center ">
          <Image width={220} height={240} src="/assets/MULTIMEDIOS.png" />
        </div>

        <div className="pb-11">
          <Image width={620} height={720} src="/assets/LOGO-TACOFEST.png" />
        </div>

        {/* Address && Date */}
        <div className="pb-16 flex justify-center">
          <img className="w-2/3" src="/assets/iztacalco.png" />
        </div>

        <div className="pb-16 flex justify-center">
          <img className="w-2/3" src="/assets/FECHA.png" />
        </div>

        {/* Media */}
        <div className="pb-16">
          <video
            className="sm:hidden"
            src="/assets/videoPhone.mp4"
            controls="controls"
            autoPlay="true"
          />
          <video
            className="max-md:hidden"
            src="/assets/videodesktop.mp4"
            controls="controls"
            autoPlay="true"
          />
        </div>

        <div className="flex justify-center">
          <img src="/assets/taco1.png" className=" w-4/6 max-md:w-2/3 " />
        </div>
      </div>

      {/* Requirements */}
      <div className="flex align-middle relative">
        <img src="/assets/bg2.jpg" width="100%" />
        <div className=" w-4/6 max-md:w-3/6 absolute  self-center pl-16 max-md:pl-5">
          <img src="/assets/requisitos.png" />
        </div>
      </div>

      {/* Menu */}
      <div className="bg-background3 bg-no-repeat bg-cover flex flex-col items-center justify-center">
        <div className="pt-24 flex justify-center ">
          <img className="w-2/3" src="/assets/con-queso.png" />
        </div>

        <div className="pt-16 pb-16 flex justify-center ">
          <img className="w-3/3" src="/assets/lista-tacos.png" />
        </div>
      </div>
    </main>
  );
}
