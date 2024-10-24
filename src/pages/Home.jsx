import ArrowRight from "../components/ArrowRight";
import BlobPurple from "../components/BlobPurple";
import BlobYellow from "../components/BlobYellow";
import bgProduct from "../assets/img/home/products/bgProduct.png";
import computer from "../assets/img/home/products/computer.png";
import patternProduct from "../assets/img/home/products/patternProduct.png";
import bgRBLight from "../assets/img/bgRBLight.png";
import bgTLSolid from "../assets/img/bgTLSolid.png";
import bgEmpower from "../assets/img/home/empowering/bgEmpower.png";
import dagri from "../assets/img/home/collaboration/dagri.png";
import dpd from "../assets/img/home/collaboration/dpd.png";
import atrbpn from "../assets/img/home/collaboration/atrbpn.png";
import kominfo from "../assets/img/home/collaboration/kominfo.png";
import pusdatin from "../assets/img/home/collaboration/pusdatin.png";

const Home = () => {
  return (
    <div className="w-full h-full flex lg:flex-row flex-col lg:gap-4 gap-2 lg:p-16 p-10 relative overflow-hidden">
      <div className="lg:w-2/5 w-full h-full flex flex-col lg:gap-4 gap-2">
        {/* Our Products */}
        <div className="w-full h-[373px] lg:h-3/4 bg-gradient-to-b from-[#7f5eb4] to-[#27458f] shadow-[2px_2px_5px_0_rgba(0,0,0,.2)] lg:rounded-3xl rounded-xl p-5 relative lg:p-8 flex flex-col gap-2">
          <div className="w-full h-1/4 lg:h-1/5 flex flex-row gap-2 z-10">
            <div className="w-5/6 h-full">
              <p className="sm:text-2xl text-md text-white">
                Looking for the perfect product to meet your needs?
              </p>
            </div>
            <div className="w-1/6 h-full flex justify-end">
              <ArrowRight to="/products" color="white" className="max-sm:w-8" />
            </div>
          </div>

          <div className="w-1/2 h-3/4 z-10">
            <p className="text-4xl lg:text-6xl text-white font-bold">
              Our Product
            </p>
          </div>

          <img
            src={bgProduct}
            className="absolute lg:w-4/5 lg:h-3/6 md:w-2/3 md:h-3/5 w-5/6 h-1/3 bottom-0 right-0 z-10"
          />

          <img
            src={computer}
            className="absolute lg:w-3/5 md:w-2/5 w-3/6 lg:bottom-8 md:bottom-1 bottom-5 sm:right-10 right-5 z-10"
          />

          <img
            src={patternProduct}
            className="w-full h-full absolute object-cover top-0 left-0"
          />
        </div>

        {/* Questions */}
        <div className="w-full h-[70px] lg:h-1/4 bg-gradient-to-tr from-[#e14924] to-[#e89e29] lg:rounded-3xl rounded-xl shadow-[2px_2px_5px_0_rgba(0,0,0,.2)] border border-white flex lg:flex-col flex-row gap-2 lg:p-8 p-5">
          <div className="lg:w-full w-1/2 lg:h-1/2 h-full flex items-center">
            <p className="lg:text-4xl md:text-3xl text-lg text-white font-bold">
              Have a Questions?
            </p>
          </div>
          <div className="lg:w-full w-1/2 lg:h-1/2 h-full flex flex-row gap-2">
            <div className="w-5/6 h-full flex justify-end items-center">
              <p className="md:text-2xl text-md text-white">
                Get in touch with us!
              </p>
            </div>
            <div className="w-1/6 h-full flex items-center justify-end">
              <ArrowRight to="/questions" color="white" className="max-sm:w-8" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-3/5 w-full h-full flex flex-col lg:gap-4 gap-2">
        {/* Our Solutions & About Us */}
        <div className="w-full lg:h-2/4 h-[150px] flex flex-row lg:gap-4 gap-2">
          {/* Our Solutions */}
          <div className="w-1/2 h-full bg-gradient-to-r from-[#4e509e] to-[#ea392a] lg:rounded-3xl rounded-xl shadow-[2px_2px_5px_0_rgba(0,0,0,.2)] flex flex-col gap-2 lg:p-8 p-5 relative">
            <div className="lg:w-1/2 w-full lg:h-3/5 h-2/5 z-10">
              <p className="lg:text-5xl md:text-3xl text-md text-white font-extrabold">
                Our Solution
              </p>
            </div>

            <div className="w-full lg:h-2/5 h-3/5 flex flex-row gap-2">
              <div className="w-5/6 h-full flex items-center">
                <p className="lg:text-2xl md:text-xl text-xs text-white">
                  Curious about what we have to offer?
                </p>
              </div>
              <div className="w-1/6 h-full flex justify-end items-center z-10">
                <ArrowRight to="/solutions" color="white" className="max-sm:w-8" />
              </div>
            </div>

            <img
              src={bgTLSolid}
              className="w-1/2 absolute top-0 left-0 opacity-5"
            />

            <img
              src={bgRBLight}
              className="w-2/3 absolute -bottom-7 -right-4"
            />
          </div>

          {/* About Us */}
          <div className="w-1/2 h-full backdrop-filter backdrop-blur-xl bg-opacity-80 bg-white rounded-3xl shadow-[2px_2px_5px_0_rgba(0,0,0,.2)] flex flex-col gap-2 lg:p-8 p-5">
            <div className="w-full lg:h-3/5 h-2/5">
              <p className="bg-gradient-to-r from-[#4e509e] to-[#ea392a] inline-block text-transparent bg-clip-text lg:text-5xl md:text-3xl text-md font-extrabold">
                About Us
              </p>
            </div>

            <div className="w-full lg:h-2/5 h-3/5 flex flex-row gap-2">
              <div className="w-5/6 h-full flex items-center">
                <p className="lg:text-2xl md:text-xl text-xs">
                  Get to know us better.
                </p>
              </div>
              <div className="w-1/6 h-full flex justify-end items-center">
                <ArrowRight to="/about-us" color="blue" className="max-sm:w-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Empowering */}
        <div className="w-full lg:h-2/5 h-[100px] lg:rounded-3xl rounded-xl p-10 flex flex-row items-center justify-center gap-4 bg-[#323232] relative">
          <p className="text-white xl:text-9xl lg:text-8xl md:text-6xl font-bold text-end">
            "
          </p>
          <span>
            <p className="text-white xl:text-6xl lg:text-4xl md:text-3xl font-bold">
              Empowering Success
            </p>
            <p className="text-white xl:text-6xl lg:text-4xl md:text-3xl font-bold">
              with Robust Solutions
            </p>
          </span>

          <div className="grayscale absolute inset-0 z-0">
            <img
              src={bgEmpower}
              className="object-cover w-full h-full opacity-20 lg:rounded-3xl rounded-xl"
            />
          </div>
        </div>

        {/* Collaborations */}
        <div className="w-full lg:h-2/4 h-auto backdrop-filter backdrop-blur-xl bg-opacity-80 bg-white rounded-3xl shadow-[2px_2px_5px_0_rgba(0,0,0,.2)] flex flex-col gap-2 lg:p-8 p-5">
          <div className="w-full h-1/2 flex flex-row gap-4">
            <div className="w-[70%] h-full flex flex-row grayscale gap-2 flex-wrap pb-5">
              <img src={dagri} alt="Kementrian Dalam Negeri" className="md:w-[calc(20%-8px)] w-[calc(33%-8px)]"/>
              <img src={dpd} alt="Dewan Perwakilan Daerah Republik Indonesia" className="md:w-[calc(20%-8px)] w-[calc(33%-8px)]"/>
              <img src={atrbpn} alt="Kementerian Agraria dan Tata Ruang" className="md:w-[calc(20%-8px)] w-[calc(33%-8px)]"/>
              <img src={kominfo} alt="Kementerian Komunikasi dan Informatika Republik Indonesia" className="md:w-[calc(20%-8px)] w-[calc(33%-8px)]"/>
              <img src={pusdatin} alt="Pusat Data dan Informasi" className="md:w-[calc(20%-8px)] w-[calc(33%-8px)]"/>
            </div>

            <div className="w-[20%] h-fit py-2 md:py-0 flex justify-center items-center">
              <p className="lg:text-2xl md:text-xl text-xl">View All</p>
            </div>

            <div className="w-[5%] h-fit flex justify-end items-center">
              <ArrowRight to="/collaborations" color="blue" className="max-sm:w-8" />
            </div>
          </div>

          <div className="md:w-1/2 w-full h-1/2 flex items-center">
            <p className="lg:text-4xl md:text-2xl text-xl font-bold">
              Our Collaboration Network
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -z-50 -right-32 md:-top-5 top-0">
        <BlobPurple />
      </div>

      <div className="absolute -z-50 -left-32 md:bottom-24 bottom-0">
        <BlobYellow />
      </div>
    </div>
  );
};

export default Home;
