const Footer = () => {
  return (
    <div className="bottom-0 left-0 flex flex-col items-center justify-center w-full h-[50%] text-white bg-black">
      <div className="top-0 left-0 flex flex-row justify-end w-full h-full gap-10 py-[50px] px-[150px]  ">
        <div className="flex flex-col gap-5">
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
      <p className="w-full h-10 text-lg text-center">
        © 2025 E-commerce. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
