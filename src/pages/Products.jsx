import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";
import BlobPurple from "../components/BlobPurple";
import bgCrmLight from "../assets/img/products/crm/bgCrmLight.png";
import bgCrmSolid from "../assets/img/products/crm/bgCrmSolid.png";
import crm from "../assets/img/products/crm/crm.png";
import bgFmsLight from "../assets/img/products/fms/bgFmsLight.png";
import bgFmsSolid from "../assets/img/products/fms/bgFmsSolid.png";
import fms from "../assets/img/products/fms/fms.png";

const Products = () => {
  return (
    <div className="w-full h-full flex flex-col md:p-16 p-8 gap-4 relative">
      <div className="w-full h-[15%] flex flex-row items-center">
        <div className="w-[10%] h-full flex items-center justify-center">
          <ArrowLeft to="/" />
        </div>
        <div className="w-[90%] h-full flex items-center">
          <p className="xl:text-3xl lg:text-2xl md:text-xl text-md ml-2 md:ml-0 font-bold">Our Products</p>
        </div>
      </div>

      <div className="xl:w-3/4 w-full h-[20%]">
        <p className="xl:text-5xl md:text-4xl text-xl font-bold">
          Innovative Solutions for Enhanced Business Operations
        </p>
        <p className="lg:text-xl md:text-md text-sm font-thin md:mt-5 mt-3">
          Discover how our ERP and FMS solutions with SSO can streamline your
          business.
        </p>
      </div>

      <div className="w-full h-[65%] mt-5">
        <div className="w-full h-full grid lg:grid-rows-1 grid-rows-2 lg:grid-cols-2 grid-cols-1 gap-4">
          {/* CRM */}
          <div className="w-full lg:h-full custom-md:h-[400px] h-[256px] backdrop-filter backdrop-blur-xl bg-opacity-80 bg-white lg:rounded-3xl rounded-xl shadow-[2px_2px_5px_0_rgba(0,0,0,.2)] lg:p-8 p-5 flex flex-col gap-4 items-end relative">
            <div className="w-full h-[10%] flex justify-end">
              <p className="xl:text-2xl custom-md:text-xl text-sm font-bold">
                Enterprise Resource Planning (ERP)
              </p>
            </div>

            <div className="w-1/3 h-[80%] flex justify-end">
              <p className="bg-gradient-to-r from-[#4e509e] to-[#ea392a] inline-block text-transparent bg-clip-text xl:text-5xl custom-md:text-4xl text-xl font-bold text-end">
                CRM Lead Monitoring
              </p>
            </div>

            <div className="w-full h-[10%] flex flex-row gap-2">
              <div className="w-[90%] h-full flex justify-end items-center">
                <p className="xl:text-2xl custom-md:text-xl text-sm">Find Out More</p>
              </div>
              <div className="w-[10%] h-full flex justify-center items-center">
                <ArrowRight to="/products/crm" color="blue" className="w-full" />
              </div>
            </div>

            <img
              src={bgCrmLight}
              className="absolute lg:w-3/5 md:w-5/12 w-1/2 bottom-0 left-0"
            />
            <img
              src={bgCrmSolid}
              className="absolute lg:w-3/5 md:w-5/12 w-1/2 bottom-0 left-0"
            />
            <img
              src={crm}
              className="absolute lg:w-1/2 md:w-4/12 w-1/2 lg:bottom-10 md:bottom-5 bottom-2 lg:left-10 md:left-7 left-2"
            />
          </div>

          {/* FMS */}
          <div className="w-full lg:h-full custom-md:h-[400px] h-[256px] bg-gradient-to-tr from-[#e14924] to-[#e89e29] lg:rounded-3xl rounded-xl shadow-[2px_2px_5px_0_rgba(0,0,0,.2)] lg:p-8 p-5 flex flex-col gap-4 items-end relative">
            <div className="w-full h-[10%] flex justify-end">
              <p className="xl:text-2xl custom-md:text-xl text-sm font-bold text-white">
                Financial Management Systems (FMS)
              </p>
            </div>

            <div className="w-full h-[80%]">
              <p className="text-white xl:text-5xl custom-md:text-4xl text-xl font-bold text-end">
                Claim Reimbursement
              </p>
            </div>

            <div className="w-full h-[10%] flex flex-row gap-2">
              <div className="w-[90%] h-full flex justify-end items-center">
                <p className="text-white xl:text-2xl custom-sm:text-xl text-md">Find Out More</p>
              </div>
              <div className="w-[10%] h-full flex justify-center items-center">
                <ArrowRight to="/products/fms" color="white" className="w-full" />
              </div>
            </div>

            <img src={bgFmsLight} className="absolute lg:w-7/12 w-[35%] bottom-0 left-0" />
            <img src={bgFmsSolid} className="absolute lg:w-6/12 w-5/12 bottom-0 left-0" />
            <img
              src={fms}
              className="absolute lg:w-[55%] md:w-5/12 custom-sm:w-6/12 w-7/12 lg:bottom-10 md:bottom-5 bottom-3 lg:left-10 md:left-7 left-2"
            />
          </div>
        </div>
      </div>

      <div className="absolute -z-10 -left-40 bottom-16">
        <BlobPurple />
      </div>
    </div>
  );
};

export default Products;
