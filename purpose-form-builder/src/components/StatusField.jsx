import { Form } from "react-bootstrap";
import RadioButton from "./RadioButton";
const StatusField = () => {
  return (
    <Form.Group className="mb-5">
      <Form.Label className="fs-5">Status:</Form.Label>
      <div className="d-flex gap-5">
        <RadioButton
          id="active"
          label="Active"
          name="status"
          defaultChecked={true}
        />
        <RadioButton id="passive" label="Passive" name="status" />
      </div>
    </Form.Group>
  );
};

export default StatusField;
