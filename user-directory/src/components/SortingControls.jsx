import React from "react";

const SortingControls = ({ setSortOrder }) => {
  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={() => setSortOrder("asc")}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Sort A-Z
      </button>
      <button
        onClick={() => setSortOrder("desc")}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Sort Z-A
      </button>
    </div>
  );
};

export default SortingControls;
