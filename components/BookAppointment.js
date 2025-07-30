"use client";
import React, { useState } from 'react';
import Swal from 'sweetalert2';

// Array of stylist objects with name and bio
const stylists = [
    { name: "Alex", bio: "The Color Specialist" },
    { name: "Jamie", bio: "The Cutting Expert" },
    { name: "Taylor", bio: "The Styling Guru" },
    { name: "Jordan", bio: "The Hair Care Specialist" },
    { name: "Morgan", bio: "The Trendsetter" },
    { name: "Casey", bio: "The Texture Master" },
    { name: "Riley", bio: "The Updo Artist" },
    { name: "Avery", bio: "The Blowout Queen" },
    { name: "Cameron", bio: "The Hair Extension Specialist" },
    { name: "Drew", bio: "The Barbering Pro" }
];

// Main component for booking appointments
export default function BookAppointment() {
    const [selectedStylist, setSelectedStylist] = useState(stylists[0].name);
    const [serviceRequest, setServiceRequest] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [errors, setErrors] = useState({});

    // Validation
    const validate = () => {
        const newErrors = {};

        // Name pattern
        if (!name.trim()) {
            newErrors.name = "Name is required.";
        } else if (!/^[a-zA-Z\s]{2,}$/.test(name.trim())) {
            newErrors.name = "Enter a valid name (letters and spaces only).";
        }

        // Email pattern
        if (!email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email.trim())) {
            newErrors.email = "Enter a valid email address.";
        }

        // Phone pattern
        if (!phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^[\d\s\-()+]{10,}$/.test(phone.trim())) {
            newErrors.phone = "Enter a valid phone number.";
        }

        return newErrors;
    };
    // Form Submission 
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        // SweetAlert 
        Swal.fire({
            title: "Appointment Booked!",
            html: `
                <div style="text-align:left">
                    <b>Name:</b> ${name}<br/>
                    <b>Phone:</b> ${phone}<br/>
                    <b>Email:</b> ${email}<br/>
                    <b>Date:</b> ${date}<br/>
                    <b>Time:</b> ${time}<br/>
                    <b>Stylist:</b> ${selectedStylist}<br/>
                    <b>Service:</b> ${serviceRequest}
                </div>
            `,
            icon: "success",
            confirmButtonColor: "#2563eb",
            timer: 20000,
            timerProgressBar: true
        });
        // Form Reset
        setName("");
        setPhone("");
        setEmail("");
        setDate("");
        setTime("");
        setSelectedStylist(stylists[0].name);
        setServiceRequest("");
    };

    return (
        <div className="flex flex-col h-screen w-full">
            <main className="flex-grow w-full py-8 px-6">
                {/* Appointment form */}
                <form onSubmit={handleSubmit} className="text-center bg-white rounded-xl shadow-lg p-6 w-[50%] mx-auto">
                    <h2 className="text-xl text-black font-bold mb-4">Book An Appointment with our Team</h2>
                    {/* Name input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-2 border border-gray-300 rounded text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
                            placeholder="Full Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    {/* Phone input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            className="w-full p-2 border text-gray-700 border-gray-300 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            required
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    {/* Email input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border text-gray-700 border-gray-300 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    {/* Date input */}
                    <div className="mb-4 flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-gray-700 mb-2" htmlFor="date">Preferred Date</label>
                            <input
                                type="date"
                                id="date"
                                className="w-full p-2 border border-gray-300 rounded text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
                                placeholder="Preferred Date"
                                value={date}
                                onChange={e => setDate(e.target.value)}
                                required
                            />
                        </div>
                        {/* Time input */}
                        <div className="w-1/2">
                            <label className="block text-gray-700 mb-2" htmlFor="time">Preferred Time</label>
                            <input
                                type="time"
                                id="time"
                                className="w-full p-2 border border-gray-300 rounded text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
                                placeholder="Preferred Time"
                                value={time}
                                onChange={e => setTime(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    {/* Stylist selection */}
                    <div className="mb-4">
                        <label htmlFor="stylist" className="block text-gray-700 mb-2">
                            Select a Stylist
                        </label>
                        <select
                            id="stylist"
                            value={selectedStylist}
                            onChange={e => setSelectedStylist(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                            required
                        >
                            {stylists.map((s) => (
                                <option key={s.name} value={s.name}>
                                    {s.name} - {s.bio}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* Service request */}
                    <div className="mb-4">
                        <label htmlFor="service" className="block text-gray-700 mb-2 ">
                            What service would you like?
                        </label>
                        <textarea
                            id="service"
                            value={serviceRequest}
                            onChange={e => setServiceRequest(e.target.value)}
                            placeholder="Describe the service you want..."
                            required
                            className="w-full p-2 border border-gray-300 text-gray-700 rounded min-h-[30px] focus:outline-none focus:ring-2 focus:ring-green-600 resize-none placeholder:text-gray-400"
                        />
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