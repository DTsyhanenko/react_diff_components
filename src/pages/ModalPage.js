import { useState } from 'react';
import Modal from "../components/Modal";
import Button from "../components/Button"

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <Button primary onClick={handleClose}>I Accept</Button>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
    </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
        </div>
    );
}

export default ModalPage;