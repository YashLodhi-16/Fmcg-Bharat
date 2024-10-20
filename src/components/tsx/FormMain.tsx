// import interface
import { MainSup } from "@/lib/interfaces/MainBasic";

// extends interface
interface FormMain extends MainSup {
  marginBottom: string;
}

// component - FormMain
const FormMain = (props: FormMain) => {
  // get data
  const { heading, superHeading, paragraph, marginBottom } = props;
  return (
    // set main margin-bottom
    <main
      className={`grid grid-cols-1 py-10 sm:py-16 px-8 sm:px-16 md:pb-32 bg-neutral-200 ${marginBottom}`}
    >
      {/* basic main section */}
      <div className="text-center md:text-start">
        <div>
          <h1 className="text-5xl text-slate-900 font-bold mb-4 sm:mb-8 font-custom">
            <span className="text-3xl block mb-2 text-slate-800">
              {superHeading}
            </span>
            {heading}
          </h1>
          <p className="">{paragraph}</p>
        </div>
      </div>
    </main>
  );
};
export default FormMain;
