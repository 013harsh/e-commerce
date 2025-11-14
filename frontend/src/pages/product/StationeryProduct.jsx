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
      route: "WritingTools",
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
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 ">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.route)}
            className="p-2  border-r-2 border-l-2 rounded-sm border-red-500 cursor-pointer bg-gray-200 transition-all duration-300 text-center shadow-sm
                      hover:bg-white hover:shadow-md"
          >
            <h3 className="text-lg font-bold mb-2 text-black">
              {category.title}
            </h3>
            <p className="text text-gray-600 m-0">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StationeryProduct;
