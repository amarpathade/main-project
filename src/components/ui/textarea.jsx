// src/components/ui/textarea.jsx
export function Textarea({ name, value, onChange, placeholder, className }) {
    return (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows="4"
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${className}`}
      />
    );
  }
  