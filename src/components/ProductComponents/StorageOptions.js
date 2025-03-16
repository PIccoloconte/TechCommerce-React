import React from "react";

const StorageOptions = () => {
  return (
    <div className="flex justify-between gap-2 mb-6">
      <div className="flex-1 px-4 py-4 text-sm text-center border border-black rounded-lg">
        128GB
      </div>
      <div className="flex-1 px-4 py-4 text-sm text-center border border-black rounded-lg">
        256GB
      </div>
      <div className="flex-1 px-4 py-4 text-sm text-center border border-black rounded-lg">
        512GB
      </div>
      <div className="flex-1 px-4 py-4 text-sm text-center border border-black rounded-lg">
        1TB
      </div>
    </div>
  );
};

export default StorageOptions;
