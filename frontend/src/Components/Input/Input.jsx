import "./Input.css";

export default function Input({
  inputId = "",
  inputType = "text",
  inputLabel = "Label",
}) {
  return (
    <div className="input-div">
      <label htmlFor={inputId}>{inputLabel}</label>
      <input type={inputType} id={inputId} />
    </div>
  );
}
