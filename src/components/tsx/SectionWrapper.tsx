// a simple cards wrapper
const CardsWrapper = (props: {
  children: React.ReactNode;
  heading: string;
}) => {
  const { children, heading } = props;
  return (
    <div className="bg-white px-4 py-8 sm:py-16 sm:px-8 flex flex-col justify-center items-center gap-8 text-slate-800 shadow-xl">
      <h2 className="text-4xl sm:text-5xl text-center font-bold">{heading}</h2>
      {children}
    </div>
  );
};
export default CardsWrapper;
