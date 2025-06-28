/**
 * 모달 조건부 제어
 *
 * 상태
 *  - 조건 1 : 백드롭 클릭 시 Hide
 *  - 조건 2 : true 일 경우 Show
 *
 * Props
 *   - children 하위 노드 출력
 */

interface ModalProps {
    children?: React.ReactNode;
    onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
                onClick={onClose}
            ></div>
            <dialog open>{children}</dialog>
        </>
    );
};
