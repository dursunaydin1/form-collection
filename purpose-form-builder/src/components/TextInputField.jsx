import { Form } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const TextInputField = ({ label, name, value, handleChange, helperText }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        className="bg-dark text-light"
      />
      {helperText && (
        <Form.Text className="text-success">{helperText}</Form.Text>
      )}
    </Form.Group>
  );
};

export default TextInputField;
