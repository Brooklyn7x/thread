import Image from "next/image";

const ThreadContent = ({ content, url }: any) => (
  <div>
    <p className="pb-2 text-sm">{content}</p>
    {url && (
      <Image
        src={url}
        alt="user_image"
        height={200}
        width={400}
        className="my-2 rounded-md max-h-[480px] w-[320px] h-auto object-cover"
      />
    )}
  </div>
);

export default ThreadContent;
