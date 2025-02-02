const Button = ({ label, iconURL, backgroundColor = "bg-coral-red", textColor = "text-white", borderColor = "border-coral-red" }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
      ${backgroundColor} ${textColor} ${borderColor} rounded-full`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="Arrow Right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
