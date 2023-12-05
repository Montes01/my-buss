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
    <article className="flex items-center w-[40rem] justify-between text-inherit bg-maximum p-5 rounded-xl h-80 gap-5">
      <img src={image} alt={title} />
      <div className="flex flex-col gap-7">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
        <a href={href}>
          <button className="w-12">
            <img
              src="https://cdn-icons-png.flaticon.com/128/190/190159.png?ga=GA1.1.990606510.1700933728&semt=ais"
              alt=""
            />
          </button>
        </a>
      </div>
    </article>
  );
}
