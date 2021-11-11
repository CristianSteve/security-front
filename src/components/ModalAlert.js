import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
//@@ModalAlert
//Ejemplo para consumo.
//const [isAlert, setIsAlert] = useState({isAccept : false, show : false, message : null});
//setIsAlert({...isAlert, show : !isAlert.show, message : "Seguro que desea grabar", primary : "Guardar"});
//<ModalAlert show={isAlert.show} onHide={({isAccept}) => setIsAlert({show : !isAlert.show, isAccept})} msgPrimary={isAlert.primary} messageError={isAlert.message} />
export const ModalAlert = ({ show, onHide, messageError, msgPrimary = null }) => {
	return (
		<Modal
			{...{ show, onHide }}
            backdrop="static"
            keyboard={false}
		>
			<Modal.Header>
				<Modal.Title id="contained-modal-title-vcenter">
					Alerta de procesamiento.
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>{messageError}</Modal.Body>
			<Modal.Footer>
				<Button variant={`${msgPrimary?"secondary": "primary"}`} onClick={onHide}>Cerrar</Button>
				{msgPrimary &&
					<Button variant="primary" onClick={()=>{onHide({isAccept:true})}}>{msgPrimary}</Button>
				}
			</Modal.Footer>
		</Modal>
	);
};
