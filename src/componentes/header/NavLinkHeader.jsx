export default ({ text }) => {
  return (
    <a href="#" className="py-8 relative group">
      <span className="group-hover:text-gray-700">{text}</span>
      <span className="absolute bottom-0 block w-full scale-x-0 transition-all duration-500 h-1 group-hover:scale-x-100 group-hover:bg-orange-primary"></span>
    </a>
  );
};
