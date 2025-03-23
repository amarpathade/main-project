// src/components/ui/button.jsx
export function Button({ children, onClick, className }) {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-xl ${className}`}
      >
        {children}
      </button>
    );
  }
  