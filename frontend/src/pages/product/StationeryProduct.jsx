import { useNavigate } from "react-router-dom";
import FilingOrganization from "./Categories/FilingOrganization";
import OtherUsefultems from "./Categories/OtherUsefultems";
import PaperNotebooks from "./Categories/PaperNotebooks";
import RulerScale from "./Categories/RulerScale";
import WritingTools from "./Categories/WritingTools";

const StationeryProduct = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: "Writing Tools",
      description: "Pens, Pencils, Markers, Highlighters",
      route: "/WritingTools",
    },
    {
      id: 2,
      title: " Paper & Notebooks",
      description: "Notebooks, Notepads, Sticky Notes",
      route: "/PaperNotebooks",
    },
    {
      id: 3,
      title: " Organization & Filing",
      description: "Folders, Binders, File organizers",
      route: "/FilingOrganization",
    },
    {
      id: 4,
      title: " Ruler / Scale",
      description: "Rulers, Scales, Measuring tools",
      route: "/RulerScale",
    },
    {
      id: 5,
      title: " Other Useful Items",
      description: "Staplers, Paper clips, Scissors, Tape",
      route: "/OtherUsefultems",
    },
  ];

  const handleCategoryClick = (route) => {
    navigate(route);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:p-6 lg:p-8">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.route)}
            className="p-2 text-center transition-all duration-300 bg-gray-200 border-l-2 border-r-2 border-red-500 rounded-sm shadow-sm cursor-pointer hover:bg-white hover:shadow-md"
          >
            <h3 className="mb-2 text-lg font-bold text-black">
              {category.title}
            </h3>
            <p className="m-0 text-gray-600 text">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StationeryProduct;
