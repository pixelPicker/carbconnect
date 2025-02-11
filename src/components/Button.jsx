export const Button = ({ variant = "default", onClick, children, className }) => {
    const buttonStyles = {
      default: "bg-blue-500 text-white hover:bg-blue-700",
      secondary: "bg-gray-200 text-gray-700 hover:bg-gray-400",
    };
  
    return (
      <button
        onClick={onClick}
        className={`!px-4 !py-2 rounded-md font-semibold focus:outline-none ${buttonStyles[variant]} ${className} text-right`}
      >
        {children}
      </button>
    );
  };
  
