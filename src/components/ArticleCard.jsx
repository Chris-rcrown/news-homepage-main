// ArticleCard Component
import { ArticleCardData } from "../data/ArticleCardData";

 const ArticleCard = () => {
    return (
      <div className="flex flex-col md:flex-row justify-even items-center  gap-3">
        {ArticleCardData.map((data, index) =>(

        <div key={index} className="flex justify-between gap-3 ">

                <img src={data.image} alt={data.title} className="w-20 h-full object-cover " />
            <div className="flex flex-col justify-between">
                <span className="text-red-500 text-xl font-bold">{data.number}</span>
                <h4 className="font-bold text-lg">{data.title}</h4>
                <p className="text-gray-600 text-sm">{data.description}</p>
            </div>
        </div>
        ))}
      </div>
    );
  };
  export default ArticleCard