function ProButton({ children, onClick, className = "", disabled = false }) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`px-4 !py-2 bg-green-600 text-white font-semibold rounded-lg transition hover:bg-green-700 disabled:bg-gray-400 ${className}`}
      >
        {children}
      </button>
    );
  }
  
  export default ProButton;
  