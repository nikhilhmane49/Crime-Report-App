import Image from "next/image";
import Link from "next/link";
import Image1 from "../../media/homelogo.png";
import realtime from "../../media/realtime.png";
import datasy from "../../media/datasy.png";
import Integration from "../../media/Integration.png";

export default function Home() {
  const features = [
    {
      title: "Real-time processing",
      description: "Our advanced encryption ensures your identity remains completely anonymous.",
      image: realtime
    },
    {
      title: "Data Security",
      description: "Protect your sensitive information with our state-of-the-art security protocols.",
      image: datasy
    },
    {
      title: "Seamless Integration",
      description: "Easily integrate our services with your existing systems and tools.",
      image: Integration
    }
  ];

  return (
    <main className="min-h-screen  text-white flex flex-col items-center justify-center py-20 mt-[100px]">
      <div className="rounded-2xl shadow-2xl p-10 max-w-8xl w-full text-center items-center justify-center ">
        {/* Header Section */}
        <div className="flex items-center justify-center gap-4 rounded-full ring-2 ring-blue-500 bg-blue-700/30 text-white px-6 py-3 text-lg font-semibold transition-all hover:bg-blue-600 hover:ring-blue-400 max-w-2xl ml-auto mr-auto">
          <svg
            className="w-10 h-10 text-blue-500 mt-4 "
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
          </svg>
          <p className="text-2xl font-semibold">
            Secure and Anonymous Reporting
          </p>
        </div>

        <h1 className="text-6xl font-extrabold text-white mt-8">
          Report Incident
        </h1>
        <p className="text-5xl text-blue-500 mt-4 font-bold">
          Protect Identity
        </p>

        <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-gray-300">
          Make your community safer without compromising your safety. Our
          advanced encryption ensures your identity remains completely
          anonymous.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center mt-8 gap-6">
          <Link href="/submit-report">
            <button className="px-8 py-4 text-lg bg-blue-500 hover:bg-blue-600 text-white rounded-full font-bold transition shadow-md hover:shadow-lg">
              Make Report Incident
            </button>
          </Link>
          <Link href="/track-report">
            <button className="px-8 py-4 text-lg border-2 border-gray-300 hover:bg-white hover:text-black rounded-full font-bold transition shadow-md">
              How it Works
            </button>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid w-full gap-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="ring-2 ring-blue-500 bg-gray-700/30 p-12 rounded-2xl shadow-lg hover:shadow-2xl text-center transition-all transform hover:-translate-y-3 hover:bg-blue-600 hover:ring-blue-400"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={100}
                height={100}
                className="mx-auto mb-6 rounded-lg"
              />
              <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
              <p className="text-gray-300 mt-4 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-32 rounded-lg bg-gray-900 py-6 px-12 max-w-4xl ml-auto mr-auto">
          {[
            { value: "100K+", label: "Reports Filed" },
            { value: "100%", label: "Anonymity Rate" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
