import { Form } from "react-bootstrap";
import PurposeField from "./PurposeField";
import TextInputField from "./TextInputField";
import StatusField from "./StatusField";
import { useState } from "react";

const FormContainer = () => {
  const [formData, setFormData] = useState({
    label: "",
    key: "",
    purpose: "client",
    status: "active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const { label, key } = formData;

    if (!label || !key) {
      console.log("Lütfen tüm alanları doldurun.");
    } else {
      console.log("Form Saved:", formData);
      // Form alanlarını temizleme
      setFormData({
        label: "",
        key: "",
        purpose: "client",
        status: "active",
      });
    }
  };

  return (
    <Form className="bg-dark p-4 rounded text-light">
      {/* Purpose Field */}
      <PurposeField />

      {/* Label Field */}
      <TextInputField
        label="Label:"
        name="label"
        value={formData.label}
        handleChange={handleChange}
        helperText="Please write label to here."
      />

      {/* Key Field */}
      <TextInputField
        label="Key:"
        name="key"
        value={formData.key}
        handleChange={handleChange}
        helperText="Please write label to here."
      />

      {/* Status Field */}
      <StatusField />

      {/* Save Button */}
      <div className="text-center">
        <button
          type="button"
          className="btn btn-success w-100 fs-3"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </Form>
  );
};

export default FormContainer;
