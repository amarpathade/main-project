// src/components/ui/input.jsx
export function Input({ name, value, onChange, placeholder, className }) {
    return (
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${className}`}
      />
    );
  }
  