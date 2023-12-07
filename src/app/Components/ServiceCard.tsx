import Link from "next/link";

interface Props {
  image: string;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  image,
  description,
  title,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="flex items-center sm:flex-row flex-col w-[40rem] sm:hover:scale-105 transition-transform justify-between text-inherit bg-maximum p-5 rounded-xl h-80 gap-5"
    >
      <img src={image} alt={title} />
      <div className="flex flex-col gap-7">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}
