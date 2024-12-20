import React from "react";
import { Form } from "react-bootstrap";
import RadioButton from "./RadioButton";

const PurposeField = () => {
  return (
    <Form.Group className="mb-4">
      <Form.Label className="fs-5">Purpose:</Form.Label>
      <div className="d-flex gap-5">
        <RadioButton
          id="client"
          label="Client"
          name="purpose"
          defaultChecked={true}
        />
        <RadioButton id="group" label="Group" name="purpose" />
        <RadioButton id="agent" label="Agent" name="purpose" />
      </div>
    </Form.Group>
  );
};

export default PurposeField;
