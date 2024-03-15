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
        <div className="pb-16">
          <Image width={220} height={240} src="/assets/iztacalco.png" />
        </div>

        <div className="pb-16">
          <Image width={340} height={240} src="/assets/FECHA.png" />
        </div>

        {/* Media */}
        <div className="pb-16">
          <video
            src="/assets/videodesktop.mp4"
            controls="controls"
            autoplay="true"
          />
        </div>

        <div>
          <Image width={340} height={240} src="/assets/taco1.png" />
        </div>
      </div>

      {/* Requirements */}
      <div className="flex align-middle relative">
        <img src="/assets/bg2.jpg" width='100%' />
        <div className="absolute  self-center pl-16">
          <img  src="/assets/requisitos.png" />
        </div>
      </div>

      {/* Menu */}
      <div className="bg-background3 bg-no-repeat bg-cover flex flex-col items-center justify-center">
        <div className="pt-24">
          <Image width={600} height={300} src="/assets/con-queso.png" />
        </div>

        <div className="pt-16 pb-16">
          <Image width={1200} height={600} src="/assets/lista-tacos.png" />
        </div>
      </div>
    </main>
  );
}
