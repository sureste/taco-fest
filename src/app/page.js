import Image from "next/image";


export default function Home() {
  return (
    <main className="bg-background1 bg-cover bg-no-repeat gap-7">
      <div className=" flex flex-col items-center align-bottom  pt-16 ">
        {/* Header */}
        <div className="pb-11 self-center ">
          <Image
            width={220}
            height={240}
            src="https://cdnpublicidad.milenio.com/2024/PublicidadComercial/03.Marzo/TACO_FEST/MULTIMEDIOS.png"
          />
        </div>

        <div className="pb-11">
          <Image
            width={620}
            height={720}
            src="https://cdnpublicidad.milenio.com/2024/PublicidadComercial/03.Marzo/Landing_Page/LOGO%20TACOFEST.png"
          />
        </div>

        {/* Address && Date */}
        <div className="pb-16 flex justify-center">
          <img
            className="w-2/3"
            src="https://cdnpublicidad.milenio.com/2024/PublicidadComercial/03.Marzo/TACO_FEST/iztacalco.png"
          />
        </div>

        <div className="pb-16 flex justify-center">
          <img
            className="w-2/3"
            src="https://cdnpublicidad.milenio.com/2024/PublicidadComercial/03.Marzo/TACO_FEST/FECHA.png"
          />
        </div>

        <div className="pb-16 flex gap-x-24 justify-center">
          <a target="_blank" href="https://www.facebook.com/multimediostv">
            <img
              className="w-14 h-14"
              src="https://cdnpublicidad.milenio.com/2024/PublicidadComercial/03.Marzo/TACO_FEST/fb-icon.png"
            />
          </a>
          <a target="_blank" href="https://www.instagram.com/multimediostv/">
            <img
              className="w-14 h-14"
              src="https://cdnpublicidad.milenio.com/2024/PublicidadComercial/03.Marzo/TACO_FEST/ig-icon.png"
            />
          </a>
        </div>

        {/* Media */}
        <div className="pb-16">
          <video
            className="sm:hidden"
            src="https://cdnpublicidad.milenio.com/2024/PublicidadComercial/03.Marzo/Landing_Page/video_mobile.mp4"
            controls="controls"
          />
          <video
            className="max-md:hidden"
            src="https://cdnpublicidad.milenio.com/2024/PublicidadComercial/03.Marzo/Landing_Page/video_desktop.mp4"
            controls="controls"
          />
        </div>

        <div className="flex justify-center">
          <img
            src="https://cdnpublicidad.milenio.com/2024/PublicidadComercial/03.Marzo/TACO_FEST/taco1.png"
            className=" w-4/6 max-md:w-2/3 "
          />
        </div>
      </div>

      {/* Requirements */}
      <div className="py-20">
        <div className="flex flex-row max-md:flex-col justify-between pl-16 max-md:pl-0 w-full">
          <div className="">
            <img
              className="pb-12"
              src="https://cdnpublicidad.milenio.com/2024/PublicidadComercial/03.Marzo/TACO_FEST/ReqHeader.png"
            />
            <ul className={`text-5xl max-md:text-sm  pl-2 text-white`}>
              <li className="">
                <span className="flex justify-start items-center">
                  {" "}
                  <p className="text-5xl max-md:text-[28px] pr-6">•</p>
                  Apasionado por los tacos{" "}
                </span>
              </li>
              <li>
                <span className="flex justify-start items-center">
                  {" "}
                  <p className="text-5xl max-md:text-[28px] pr-6">•</p> Que te
                  guste bailar y disfrutar un concierto
                </span>
              </li>
              <li>
                <span className="flex justify-start items-center">
                  {" "}
                  <p className="text-5xl max-md:text-[28px] pr-6">•</p> Vivir la
                  experiencia al máximo{" "}
                </span>
              </li>
              <li>
                <span className="flex justify-start items-center">
                  {" "}
                  <p className="text-5xl max-md:text-[28px] pr-6">•</p> Pasión
                  por la lucha libre{" "}
                </span>
              </li>
              <li>
                <span className="flex justify-start items-center">
                  {" "}
                  <p className="text-5xl max-md:text-[28px] pr-6">•</p> Fanático
                  de las salsas{" "}
                </span>
              </li>
            </ul>
          </div>
          <div className="">
            <img
              className=""
              src="https://cdnpublicidad.milenio.com/2024/PublicidadComercial/03.Marzo/TACO_FEST/taco2.png"
            />
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="flex flex-col items-center justify-center">
        <div className="pt-24 flex justify-center ">
          <img
            className="w-5/6"
            src="https://cdnpublicidad.milenio.com/2024/PublicidadComercial/03.Marzo/TACO_FEST/con-queso.png"
          />
        </div>

        <div className="pt-16 pb-16 flex justify-center ">
          <img
            className="w-3/3"
            src="https://cdnpublicidad.milenio.com/2024/PublicidadComercial/03.Marzo/TACO_FEST/lista-tacos.png"
          />
        </div>
      </div>
      <footer className="bg-zinc-900 h-56 flex flex-col items-center justify-between py-10">
        <a href="https://maps.app.goo.gl/9V7uu4EvSxQjGbxaA" target="_blank">
          <p className="text-white">
            {" "}
            Dirección: Río Churubusco s/n Ramos Millán Bramadero Mexico, DF
            08000 Esquina con Eje 4 Sur{" "}
          </p>
        </a>
        <Image
          width={220}
          height={240}
          src="https://cdnpublicidad.milenio.com/2024/PublicidadComercial/03.Marzo/TACO_FEST/MULTIMEDIOS.png"
        />
      </footer>
    </main>
  );
}
