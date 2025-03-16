const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="flex items-center mb-4">
      {/* Label */}
      <div className="w-1/4 text-sm font-medium">{label}</div>
      {/* Progress Bar */}
      <div className="w-3/4 bg-gray-300 rounded-full h-[5px] relative">
        <div
          className="bg-[#FFB547] h-[5px] rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
