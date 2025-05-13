// src/components/select/SelectJurusan.jsx
import Select from "react-select";

const optionsJurusan = [
  { value: "RPL", label: "RPL" },
  { value: "TKJ", label: "TKJ" },
  { value: "TBSM", label: "TBSM" },
  { value: "TKRO", label: "TKRO" },
];

export default function SelectJurusan({ value, onChange }) {
  return (
    <div style={{ marginBottom: "15px", width: "100%" }}>
      <Select
        options={optionsJurusan}
        value={optionsJurusan.find(o => o.value === value)}
        onChange={opt => onChange({ target: { id: "jurusan", value: opt.value } })}
        placeholder="Pilih Jurusan"
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
            fontStyle: "normal",  // Ganti "italic" menjadi "normal" atau hapus baris ini
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
