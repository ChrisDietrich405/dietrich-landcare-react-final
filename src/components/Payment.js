import "../styles/Payment.scss";


export default function Payment({closeModal}) {
    return (
        <div className="payment-container">
            <div className="payment-content">
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    )
}