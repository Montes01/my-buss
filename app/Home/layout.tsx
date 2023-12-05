import Services from "../components/Services";
import Slider from "../components/Slider";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div className="flex w-full flex-col">
      <section className="flex w-full h-[700px] relative overflow-hidden px-5">
        <section className="w-full rounded-xl absolute h-full ">
          <Slider />
        </section>
        <main className="h-full p-2 w-full grid place-content-center">{children}</main>
      </section>
      <Services />
    </div>
  );
};

export default layout;
