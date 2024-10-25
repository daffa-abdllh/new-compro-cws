import logo from "../assets/img/logo.png"

const Footer = () => {
  return (
    <footer className="w-full md:h-36 h-auto bg-[#323232] py-5 px-10 flex flex-col">
      <div className="w-full h-full flex md:flex-row flex-col md:px-16 ">
        <div className="xl:w-1/2 md:w-1/3 w-full h-full flex-grow flex items-center md:justify-start justify-center">
          <img src={logo} alt="Logo" className="xl:w-[18%] custom-sm3:w-28 w-28" />
        </div>

        <div className="xl:w-1/2 w-2/3 h-full flex-grow-0 flex md:flex-row flex-col gap-4 justify-end md:mt-0 mt-5">
          <div className="text-white">
            <span>
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline"
              >
                <path
                  d="M9.91926 0.131836H1.18374C0.58317 0.131836 0.0917969 0.623209 0.0917969 1.22378V7.77541C0.0917969 8.37598 0.58317 8.86735 1.18374 8.86735H9.91926C10.5198 8.86735 11.0112 8.37598 11.0112 7.77541V1.22378C11.0112 0.623209 10.5198 0.131836 9.91926 0.131836ZM9.70087 2.45221L6.13022 4.68523C5.77534 4.90907 5.32765 4.90907 4.97277 4.68523L1.40212 2.45221C1.26563 2.36485 1.18374 2.21744 1.18374 2.05911C1.18374 1.69331 1.58229 1.47492 1.8935 1.66601L5.5515 3.95363L9.2095 1.66601C9.5207 1.47492 9.91926 1.69331 9.91926 2.05911C9.91926 2.21744 9.83736 2.36485 9.70087 2.45221Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="lg:text-sm text-xs"> info@cws.co.id </span>
          </div>
          
          <div className="text-white text-sm basis-1/2">
            <span>
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline"
              >
                <path
                  d="M4.65487 5.5515C5.25544 5.5515 5.74681 5.06012 5.74681 4.45956C5.74681 3.85899 5.25544 3.36762 4.65487 3.36762C4.0543 3.36762 3.56293 3.85899 3.56293 4.45956C3.56293 5.06012 4.0543 5.5515 4.65487 5.5515ZM4.65487 0.0917969C6.94794 0.0917969 9.02263 1.84982 9.02263 4.56875C9.02263 6.30493 7.685 8.34686 5.01521 10.7C4.80774 10.8802 4.49654 10.8802 4.28907 10.7C1.62474 8.34686 0.287109 6.30493 0.287109 4.56875C0.287109 1.84982 2.3618 0.0917969 4.65487 0.0917969Z"
                  fill="white"
                />
              </svg>
            </span>

            <span className="lg:text-sm text-xs">
              Graha Komando, Jl. Raya Cipinang Indah No. 1, Jakarta - 13420
            </span>
          </div>
        </div>
      </div>

      <hr className="md:my-5 my-2" />

      <div className="w-full h-full text-center">
        <p className="text-white lg:text-sm text-xs">2024 PT Cakra Wijaya Solusi</p>
      </div>
    </footer>
  );
};

export default Footer;
