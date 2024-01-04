import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SeatSelection = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [selectedSeats, setSelectedSeats] = useState([]);
    const rows = ["A", "B", "C", "D"];
    const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const seatPrice = 200;

    const handleSeatClick = (seat) => {
        const isSelected = selectedSeats.includes(seat);
        if (isSelected) {
            // If seat is already selected, remove it
            setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
        } else {
            // If seat is not selected, add it
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    const handleContinueClick = () => {
        const totalAmount = selectedSeats.length * seatPrice;
        navigate(`/error-page?amount=${totalAmount}`);
    };

    return (
        <div className="container mx-auto my-8 p-4 ">
            <div className="bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-4">
                    <h2 className="text-3xl font-semibold mb-4">Select Your Seats</h2>
                    <div className="seat-container">
                        {rows.map((row) => (
                            <div key={row} className="flex items-center justify-center">
                                {cols.map((col) => {
                                    const seat = `${row}${col}`;
                                    const isSelected = selectedSeats.includes(seat);
                                    return (
                                        <div
                                            key={col}
                                            className={`single-seat bg-gray-600 rounded-full cursor-pointer ${isSelected ? "bg-blue-500 text-white" : ""
                                                }`}
                                            onClick={() => handleSeatClick(seat)}
                                        >
                                            {col}
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                    <div className="mt-8">
                        <p className="text-gray-400 mb-2">
                            Selected Seats: {selectedSeats.join(", ") || "None"}
                        </p>
                        <p className="text-gray-400 mb-2">
                            Total Amount: ₹{selectedSeats.length * seatPrice}
                        </p>
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
                            onClick={handleContinueClick}
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeatSelection;
