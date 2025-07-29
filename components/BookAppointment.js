import  React from 'react';

// Main component for booking appointments
export default function BookAppointment() {
    return (
        <div className="flex flex-col h-screen w-full">
            <main className="flex-grow w-full py-8 px-6">
                {/* Appointment form */}
                <form className="text-center bg-white rounded-xl shadow-lg p-6 w-[50%] mx-auto">
                    <h2 className="text-xl text-black font-bold mb-4">Book An Appointment with our Team</h2>
                    {/* Name input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded text-gray-700" required />
                    </div>
                    {/* Phone input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    {/* Email input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    {/* Date input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="date">Preferred Date</label>
                        <input type="date" id="date" className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    {/* Time input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="time">Preferred Time</label>
                        <input type="time" id="time" className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    {/* Submit button */}
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                        Book Appointment
                    </button>
                </form>
            </main>
        </div>
    );
}