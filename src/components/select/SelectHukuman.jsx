// src/components/select/SelectHukuman.jsx
import Select from "react-select";

const optionsHukuman = [
  { value: "Teguran", label: "Teguran" },
  { value: "Piket", label: "Piket" },
  { value: "Menghafal", label: "Menghafal" },
];

export default function SelectHukuman({ value, onChange }) {
  return (
    <div style={{ marginBottom: "15px", width: "100%" }}>
      <Select
        options={optionsHukuman}
        value={optionsHukuman.find(o => o.value === value)}
        onChange={opt => onChange({ target: { id: "hukuman", value: opt.value } })}
        placeholder="Pilih Hukuman"
        styles={{
          control: (base, state) => ({
            ...base,
            backgroundColor: "white",
            border: "none",
            borderBottom: state.isFocused ? "1px solid #4a90e2" : "1px solid #ccc",
            borderRadius: 0,
            boxShadow: "none",
            padding: "4px 0",
            minHeight: "auto",
            "&:hover": {
              borderBottom: "1px solid #4a90e2",
            },
          }),
          placeholder: base => ({
            ...base,
            color: "#333",
            fontStyle: "normal", // pastikan fontStyle normal untuk tidak miring
          }),
          singleValue: base => ({
            ...base,
            color: "#333",
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#f0e7ff" : "#fff",
            color: "#333",
            padding: "10px",
          }),
        }}
      />
    </div>
  );
}
