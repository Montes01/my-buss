import Services from "@/app/Components/Services";
import Slider from "@/app/Components/Slider";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div className="flex w-full flex-col">
      <section className="flex w-full h-auto relative overflow-hidden md:px-5 lg:h-[55rem]">
        <section className="w-full rounded-xl absolute h-full ">
          <Slider />
        </section>
        <main className="md:p-2 md:py-20 w-full grid place-content-center">
          {children}
        </main>
      </section>
      <Services />
    </div>
  );
};

export default layout;
