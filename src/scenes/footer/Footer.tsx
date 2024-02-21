// import logo from "@assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          {/* <img src={logo} alt="logo" /> */}
          <svg
            width="50"
            height="30"
            viewBox="0 0 94 108"
            fill="#E1986F"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M54.0434 101.423L55.3836 102.908H57.384H72.616H82.8456L75.9332 95.3673L37.8715 53.8453L75.5678 12.2124L82.377 4.69202H72.232H57.512H55.4954L54.1533 6.19722L25.148 38.7274V9.19202V4.69202H20.648H9H4.5V9.19202V98.408V102.908H9H20.648H25.148V98.408V69.4065L54.0434 101.423Z"
              stroke="#FFC132"
              stroke-width="9"
            />
          </svg>
          <p className="my-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a gallery of type
            and scrambled it to make a type specimen book.
          </p>
          <p>&#169; Kol_Gym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volupat egestas</p>
          <p>(+234) 8150672809</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
