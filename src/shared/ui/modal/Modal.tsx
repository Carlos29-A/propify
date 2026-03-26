import { Title } from "../title/Title";

interface ModalProps {

    title: string;
    description: string;
    onClose: () => void;
    onConfirm: () => void;
}

export const Modal = ({ title, description, onClose, onConfirm }: ModalProps) => {
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-4 w-full max-w-md">
                <Title title={title} subtitle={description} />
                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 cursor-pointer transition-all">Cerrar</button>
                    <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 cursor-pointer transition-all">Confirmar</button>
                </div>
            </div>
        </div>
    )
}
