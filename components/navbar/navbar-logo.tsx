import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image src={"/logo.svg"} alt="Logo" height={50} width={50} />
    </Link>
  );
};
