import { useState } from "react";

function PhoneInput() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handlePhoneChange = (e) => {
    const value = e.target.value;

    // Only allow digits
    if (!/^\d*$/.test(value)) return;

    // Limit to 9 digits
    if (value.length > 9) return;

    // If the first digit is not 6 or 7, show error
    if (value.length === 1 && !/^[67]$/.test(value)) {
      setError("The number must start with 6 or 7.");
    } else {
      setError("");
    }

    setPhone(value);
  };

  return (
    <div className="w-full">
      <div className="flex items-center border border-gray-300 rounded py-1.5 px-3.5 w-full">
        <span className="text-gray-700 mr-2 select-none">+212</span>
        <input
          className="outline-none flex-1"
          type="tel"
          placeholder="6********"
          value={phone}
          onChange={handlePhoneChange}
          required
        />
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}

export default PhoneInput;
