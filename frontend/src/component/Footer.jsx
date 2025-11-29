const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full text-white bg-black min-h-64 ">
        <div className="flex flex-col gap-4 px-4 py-8 justify-cente sm:flex-row sm:justify-end lg:gap-10 sm:py-12 lg:py-16 sm:px-8 lg:px-16 xl:px-24">
          <div className="flex flex-col space-y-5">
            <p className="font-bold">Get to Know Us</p>
            <ul>
              <li>Our Company</li>
              <li>Our Blog</li>
              <li>Our Privacy Policy</li>
              <li>Our Terms of Use</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold">Connect with Us</p>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold">Make Money with Us</p>
            <ul>
              <li>Our Company</li>
              <li>Our Blog</li>
              <li>Our Privacy Policy</li>
              <li>Our Terms of Use</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold">Let Us Help You</p>
            <ul>
              <li>Our Company</li>
              <li>Our Blog</li>
              <li>Our Privacy Policy</li>
              <li>Our Terms of Use</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="w-full h-10 text-lg text-center text-white bg-black">
        © 2025 E-commerce. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
