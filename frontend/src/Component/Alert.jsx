import React, { useRef, useEffect } from 'react';
import { Toast } from 'primereact/toast';

export default function Alert({ show, message, type = "info", onClose }) {
    const toastRef = useRef(null);

    useEffect(() => {
        if (show && toastRef.current) {
            toastRef.current.show({
                severity: type,
                summary: message.title,
                detail: message.description,
                life: 3000
            });

            const timer = setTimeout(() => {
                onClose();
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [show, message, type, onClose]);

    return (
        <Toast ref={toastRef} position="top-center" />
    );
}
