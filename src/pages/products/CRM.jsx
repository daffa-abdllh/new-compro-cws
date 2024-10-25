import ArrowLeft from "../../components/ArrowLeft";
import Footer from "../../components/Footer";
import BlobPurple from "../../components/BlobPurple";
import crm from "../../assets/img/products/crm/crm.png";
import image from "../../assets/img/image.png";
import bgCrmLight from "../../assets/img/products/crm/bgCrmLight.png";
import bgCrmSolid from "../../assets/img/products/crm/bgCrmSolid.png";
import BlopBlue from "../../components/BlobBlue";
import { Link } from "react-router-dom";

const CRM = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-full flex flex-col md:p-16 p-8 gap-4 relative overflow-hidden">
        <div className="w-full h-[10%] flex flex-row items-center">
          <div className="w-[10%] h-full flex items-center justify-center">
            <ArrowLeft to="/" />
          </div>
          <div className="w-[90%] h-full flex items-center">
            <p className="xl:text-3xl lg:text-2xl md:text-xl text-md ml-2 md:ml-0 font-bold">
              CRM Lead Monitoring
            </p>
          </div>
        </div>

        <div className="w-full md:h-[470px] h-auto flex md:flex-row gap-4 custom-lg:mt-10 mt-5">
          {/* Image */}
          <div className="md:w-1/2 w-full h-full md:flex hidden justify-center items-center">
            <img
              src={crm}
              alt="Customer Relation Management"
              className="xl:w-1/2 lg:w-3/5 md:w-3/4 w-1/2 xl:mr-32 lg:mr-28 mr-24"
            />
          </div>

          {/* Card */}
          <div className="md:w-1/2 w-full h-full flex items-center">
            <div className="md:w-[474px] w-full h-auto backdrop-filter backdrop-blur-xl bg-opacity-80 bg-white lg:rounded-3xl rounded-xl shadow-[2px_2px_5px_0_rgba(0,0,0,.2)] md:p-10 p-7">
              <div>
                <p className="xl:text-4xl custom-lg:text-3xl text-2xl font-bold">
                  What is
                </p>
                <p className="xl:text-4xl custom-lg:text-3xl text-2xl font-bold bg-gradient-to-r from-[#4e509e] to-[#ea392a] inline-block text-transparent bg-clip-text">
                  CRM Lead Monitoring?
                </p>
              </div>

              <div className="xl:mt-10 md:mt-7 mt-3">
                <p className="xl:text-lg custom-lg:text-md md:text-sm text-xs font-thin">
                  The Claim-Reimbursement module is an essential tool for
                  businesses looking to streamline their financial processes.{" "}
                </p>
                <p className="xl:text-lg custom-lg:text-md md:text-sm text-xs font-thin xl:mt-5 mt-3">
                  By automating and simplifying claim handling, it allows for
                  more efficient management of company expenses and enhances
                  overall operational effectiveness.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[30%] lg:mt-28 mt-14">
          <div>
            <p className="xl:text-4xl md:text-3xl text-2xl font-bold">
              Core Features
            </p>
            <p className="xl:text-4xl md:text-3xl text-2xl font-bold bg-gradient-to-r from-[#4e509e] to-[#ea392a] inline-block text-transparent bg-clip-text mt-2">
              of Our ERP System
            </p>
          </div>

          <div className="w-full h-full grid custom-lg:grid-rows-2 md:grid-rows-3 grid-rows-6 custom-lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mt-10">
            <div className="w-full custom-sm2:h-[250px] h-[200px] backdrop-filter backdrop-blur-xl bg-opacity-80 bg-white lg:rounded-3xl rounded-xl shadow-[2px_2px_5px_0_rgba(0,0,0,.2)] md:p-8 p-3">
              <img
                src={image}
                className="xl:w-1/4 md:w-2/5 custom-sm2:w-3/12 w-2/6"
              />
              <p className="md:text-lg custom-sm2:text-md text-sm font-thin mt-7">
                Quotation, Profit & Loss, Purchase Orders, and Sales Orders.
              </p>
            </div>
            <div className="w-full custom-sm2:h-[250px] h-[200px] backdrop-filter backdrop-blur-xl bg-opacity-80 bg-white lg:rounded-3xl rounded-xl shadow-[2px_2px_5px_0_rgba(0,0,0,.2)] md:p-8 p-3">
              <img
                src={image}
                className="xl:w-1/4 md:w-2/5 custom-sm2:w-3/12 w-2/6"
              />
              <p className="md:text-lg custom-sm2:text-md text-sm font-thin mt-7">
                Receipt of Orders, Delivery Orders, and Invoicing.
              </p>
            </div>

            <div className="w-full custom-sm2:h-[250px] h-[200px] backdrop-filter backdrop-blur-xl bg-opacity-80 bg-white lg:rounded-3xl rounded-xl shadow-[2px_2px_5px_0_rgba(0,0,0,.2)] md:p-8 p-3">
              <img
                src={image}
                className="xl:w-1/4 md:w-2/5 custom-sm2:w-3/12 w-2/6"
              />
              <p className="md:text-lg custom-sm2:text-md text-sm font-thin mt-7">
                Project-Based Functionality for Better Management.
              </p>
            </div>

            <div className="w-full custom-sm2:h-[250px] h-[200px] backdrop-filter backdrop-blur-xl bg-opacity-80 bg-white lg:rounded-3xl rounded-xl shadow-[2px_2px_5px_0_rgba(0,0,0,.2)] md:p-8 p-3">
              <img
                src={image}
                className="xl:w-1/4 md:w-2/5 custom-sm2:w-3/12 w-2/6"
              />
              <p className="md:text-lg custom-sm2:text-md text-sm font-thin mt-7">
                Interactive Dashboard for Real-Time Insights.
              </p>
            </div>

            <div className="w-full custom-sm2:h-[250px] h-[200px] backdrop-filter backdrop-blur-xl bg-opacity-80 bg-white lg:rounded-3xl rounded-xl shadow-[2px_2px_5px_0_rgba(0,0,0,.2)] md:p-8 p-3">
              <img
                src={image}
                className="xl:w-1/4 md:w-2/5 custom-sm2:w-3/12 w-2/6"
              />
              <p className="md:text-lg custom-sm2:text-md text-sm font-thin mt-7">
                Master Data Management for Products and Brands.
              </p>
            </div>

            <div className="w-full custom-sm2:h-[250px] h-[200px] backdrop-filter backdrop-blur-xl bg-opacity-80 bg-white lg:rounded-3xl rounded-xl shadow-[2px_2px_5px_0_rgba(0,0,0,.2)] md:p-8 p-3">
              <img
                src={image}
                className="xl:w-1/4 md:w-2/5 custom-sm2:w-3/12 w-2/6"
              />
              <p className="md:text-lg custom-sm2:text-md text-sm font-thin mt-7">
                Multiple Account and Role Access for Flexibility.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex items-end 2xl:mt-44 xl:mt-32 md:mt-24 mt-12">
          <div className="w-full md:h-[338px] h-auto backdrop-filter backdrop-blur-xl bg-opacity-80 bg-white lg:rounded-3xl rounded-xl shadow-[2px_2px_5px_0_rgba(0,0,0,.2)] flex md:flex-row gap-4 p-8 relative">
            <div className="w-1/2 h-full md:flex hidden">
              <img
                src={bgCrmLight}
                className="absolute xl:w-1/4 custom-lg:w-2/6 w-2/5 bottom-0 left-0"
              />
              <img
                src={bgCrmSolid}
                className="absolute xl:w-1/4 custom-lg:w-2/6 w-2/5 bottom-0 left-0"
              />
              <img
                src={crm}
                className="absolute xl:w-1/4 custom-lg:w-2/6 w-2/5 bottom-10 custom-lg:left-10 left-5"
              />
            </div>

            <div className="md:w-1/2 w-full h-full custom-2xl:px-32 md:py-8">
              <p className="xl:text-4xl md:text-3xl text-2xl font-bold bg-gradient-to-r from-[#4e509e] to-[#ea392a] inline-block text-transparent bg-clip-text">
                Explore Our Solutions
              </p>

              <p className="xl:text-lg md:text-md text-sm font-thin mt-5">
                Take a closer look at how it can transform your lead management
                process and drive your business growth.
              </p>

              <Link to="/solutions">
                <div className="xl:w-[168px] lg:w-[160px] md:w-[150px] w-[130px] xl:h-[42px] h-[35px] bg-[#3A6BEE] flex items-center justify-center rounded-full custom-lg:mt-10 mt-7">
                  <p className="xl:text-lg lg:text-md md:text-sm text-xs text-white">
                    See How It Works
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute -z-10 -left-60 top-20">
          <BlobPurple />
        </div>

        <div className="absolute lg:-right-44 -right-64 bottom-56 -z-10">
          <BlopBlue />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CRM;
