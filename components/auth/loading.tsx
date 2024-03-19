import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  );
};

export default Loading;
