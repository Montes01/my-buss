import Slider from "../components/Slider";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div className="flex w-full flex-grow">
      <aside className="w-1/2 h-full pointer-events-none">
        <Slider />
      </aside>

      <main className="w-1/2 h-full p-2">{children}</main>

    </div>
  );
};

export default layout;
