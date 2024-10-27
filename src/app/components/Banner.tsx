import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
      <Image
        className="object-cover object-left  "
        src={
"https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1203&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="banner"
        fill
      />
      <div className="absolute top-1/2 w-full text-center ">
        <p className="text-sm sm:text-lg">Not sure where to go ? Perfect.</p>
        <button
          type="button"
          className="font-bold text-purple-500 bg-white px-10 shadow-md rounded "
        >
          I am flexible
        </button>
      </div>
    </div>
  );
}
