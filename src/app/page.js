import Image from "next/image";


export default function Home() {
  return (
    <main className="">
      <div className=" bg-background1 flex flex-col items-center align-bottom  pt-16 ">
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
          <h1 className="text-white text-3xl">
            {" "}
            Aqui va el video pero no ahorita no estoy seguro de como hacerlo xd{" "}
          </h1>
        </div>

        <div>
          <Image width={340} height={240} src="/assets/taco1.png" />
        </div>
      </div>

      {/* Requirements */}
      <div className="flex bg-cover bg-background2 align-middle pt-80">
        <div className="ml-28 pb-28">
          <Image src="/assets/requisitos.png" width={600} height={600} />
        </div>
      </div>

      {/* Menu */}
      <div className="bg-background3 flex flex-col items-center justify-center">
        <div className="pt-24">
          <Image width={600} height={300} src="/assets/con-queso.png" />
        </div>

        <div className="pt-16" >
          <Image width={1200} height={600} src="/assets/lista-tacos.png" />
        </div>
      </div>
    </main>
  );
}
