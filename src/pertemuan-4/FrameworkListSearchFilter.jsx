import { useState } from "react"
import frameworkData from "./framework.json"

export default function FrameworkList() {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTag, setSelectedTag] = useState("");


    const _searchTerm = searchTerm.toLowerCase();
    const filteredFrameworks = frameworkData.filter((framework) => {
      const matchesSearch =
        framework.name
                  .toLowerCase()
                  .includes(_searchTerm) ||
        framework.description
                  .toLowerCase()
                  .includes(_searchTerm);
  
      const matchesTag = selectedTag ? framework.tags.includes(selectedTag) : true;
  
      return matchesSearch && matchesTag;
    });

    const allTags = [
        ...new Set(frameworkData.flatMap((framework) => framework.tags)),
      ];

      return (
        <div className="min-h-screen p-8">
            <input
            type="text"
            name="searchTerm"
            placeholder="Search framework..."
            className="w-full p-2 border border-white rounded mb-4 text-black bg-neutral-300"
            onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
            name="selectedTag"
            className="w-full p-2 border border-white rounded mb-4 text-black bg-neutral-300"
            onChange={(e) => setSelectedTag(e.target.value)}
            >
            <option value="">All Tags</option>
                {allTags.map((tag, index) => (
                    <option key={index} value={tag}>
                    {tag}
            </option>
            ))}
            </select>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            {filteredFrameworks.map((item) => (
		            <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
		                <h2 className="text-lg font-bold text-balck md:text-lg lg:text-xl xl:text-2xl mb-4">{item.name}</h2>
		                <p className="text-gray-600">{item.description}</p>
		                <a className="text-blue-200 hover:text-blue-600 underline text-sm md:text-lg lg:text-xl xl:text-2xl mb-4" href={item.details.officialWebsite}>Visit Website</a>
                        <p>{item.tags.map((tag,index)=>(
                            <span key={index} className="bg-neutral-800 text-white px-2 py-1 text-xs rounded-full mr-2">
                                {tag}
                            </span>
                        ))}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
