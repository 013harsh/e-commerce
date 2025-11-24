const Footer = () => {
  return (
    <div className="w-full min-h-64 text-white bg-black">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-end w-full gap-4 sm:gap-6 lg:gap-10 py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 xl:px-24">
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
