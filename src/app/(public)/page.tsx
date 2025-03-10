import Image from "next/image";
import Link from "next/link";
import heroImg from "../../../public/hero-img.png";
import logoImg from "../../../public/logo.svg";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="sticky top-0 left-0 px-4 sm:px-16 py-5 border-b bg-white z-1 border-black/10 flex items-center justify-between">
        <Link
          href={"/"}
          className="flex space-x-2 items-center text-lg font-extrabold tracking-tighter hover:cursor-pointer"
        >
          <div className="h-8 w-8">
            <Image src={logoImg} alt="logo" />
          </div>
          <span>TRACAREER</span>
        </Link>
        <Link
          href={"/signin"}
          className="text-sm border rounded py-1 px-2 hover:bg-black hover:text-white"
        >
          SIGN IN
        </Link>
      </header>

      {/* Content */}
      <div className="h-full max-w-5xl lg:max-w-6xl mx-auto px-5 py-10 lg:py-20">
        <div className="mx-auto w-fit flex flex-col space-y-3 text-left">
          {/* Main */}
          <div className="grid grid-cols-1 gap-20 lg:gap-5 lg:grid-cols-5">
            <section className="flex flex-col space-y-10 lg:space-y-20 lg:col-span-3">
              <div>
                <div className="font-extrabold tracking-tighter">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl">
                    Lost in Your Job Search?
                  </h1>
                  <div className="text-4xl sm:text-6xl lg:text-7xl -rotate-2 flex flex-col space-y-3">
                    <h1>Track Your</h1>
                    <h1>Applications with</h1>
                    <h1 className="w-fit px-5 sm:px-10 bg-gradient-to-r from-green-300 to-pink-300">
                      Tracareer !
                    </h1>
                  </div>
                </div>

                <h3 className="text-gray-500/80 font-medium mt-10 text-sm sm:text-base lg:text-lg">
                  Tracareer is a tool that helps job seekers track their
                  applications.
                </h3>
              </div>

              <Link
                href={"/signin"}
                className="w-fit text-white py-2 px-4 text-sm sm:text-base bg-black rounded hover:bg-gradient-to-r hover:from-green-500 hover:to-pink-500 hover:text-black/80 font-bold"
              >
                Create My Tracker
              </Link>
            </section>

            <section className="lg:col-span-2">
              {/* Img */}
              <Image src={heroImg} alt="" className="object-cover w-full" />
            </section>
          </div>
        </div>
      </div>
      <div className="py-2 bg-gray-50 text-center mt-10">
        <h1>Copyright © 2025 Harry Park</h1>
      </div>
    </div>
  );
}
