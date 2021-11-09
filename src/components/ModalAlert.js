import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const ModalAlert = ({ show, onHide, messageError }) => {
	return (
		<Modal
			{...{ show, onHide }}
            backdrop="static"
            keyboard={false}
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Alerta de procesamiento.
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>{messageError}</Modal.Body>
			<Modal.Footer>
				<Button onClick={onHide}>Cerrar</Button>
			</Modal.Footer>
		</Modal>
	);
};
