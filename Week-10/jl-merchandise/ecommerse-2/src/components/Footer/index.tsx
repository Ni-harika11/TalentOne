const Footer = () => {
  return (
    <div>
      <footer className=" w-full grid grid-cols-3   gap-4 py-4 border-t text-sm text-white bg-blue-500">
        <div></div>
        <p className="text-center">&copy; 2025 MyStore. All rights reserved.</p>
        <div className="flex gap-4 px-4 justify-end">
          <a
            href="#privacy"
            className="hover:text-white hover:underline transition"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="hover:text-white hover:underline transition"
          >
            Terms
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
