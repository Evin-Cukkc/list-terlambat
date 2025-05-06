import Select from "react-select";

const optionsKelas = [
  { value: "X", label: "X" },
  { value: "XI", label: "XI" },
  { value: "XII", label: "XII" },
];

export default function SelectKelas({ value, onChange }) {
  return (
    <div style={{ marginBottom: "15px", width: "100%" }}>
      <Select
        options={optionsKelas}
        value={optionsKelas.find(o => o.value === value)}
        onChange={opt => onChange({ target: { id: "kelas", value: opt.value } })}
        placeholder="Pilih Kelas"
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
            color: "#777",
            fontStyle: "normal",
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
