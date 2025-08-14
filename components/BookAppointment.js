"use client";
import React, { useState, useEffect } from 'react';
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
    const [isLoading, setIsLoading] = useState(false);
    const [fieldValid, setFieldValid] = useState({});
    const [touched, setTouched] = useState({});

    // Real-time validation function
    const validateField = (fieldName, value) => {
        const validators = {
            name: {
                required: "Name is required.",
                pattern: {
                    regex: /^[a-zA-Z\s]{2,}$/,
                    message: "Enter a valid name."
                }
            },
            email: {
                required: "Email is required.",
                pattern: {
                    regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
                    message: "Enter a valid email address."
                }
            },
            phone: {
                required: "Phone number is required.",
                pattern: {
                    regex: /^[\d\s\-()+]{10,}$/,
                    message: "Enter a valid phone number."
                }
            }
        };

        // Get the validator for the field
        const validator = validators[fieldName];
        if (!validator) return;

        let error = '';
        
        if (!value.trim()) {
            error = validator.required;
        }
        else if (validator.pattern && !validator.pattern.regex.test(value.trim())) {
            error = validator.pattern.message;
        }
        
        setErrors(prev => ({ ...prev, [fieldName]: error }));
        setFieldValid(prev => ({ ...prev, [fieldName]: !error && value.trim() }));
    };

    // Validation delay
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (touched.name && name) validateField('name', name);
            if (touched.email && email) validateField('email', email);
            if (touched.phone && phone) validateField('phone', phone);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [name, email, phone, touched]);

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

    // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsLoading(false);
            return;
        }
        
        await new Promise(resolve => setTimeout(resolve, 2000));

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
        }).then(() => {
            setIsLoading(false);
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
        <div className="flex flex-col w-full">
            <main className="flex-grow w-full py-8 px-6">
                <form onSubmit={handleSubmit} noValidate className="text-center bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl shadow-2xl border border-blue-100 p-8 w-[95%] md:w-[75%] lg:w-[60%] mx-auto backdrop-blur-sm"> {/* Form for booking appointments */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                        Book An Appointment with our Team
                    </h2>
                    {/* Name field validation messages */}
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-3 font-semibold text-left" htmlFor="name">
                            Full Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                aria-describedby={errors.name ? "name-error" : undefined}
                                aria-required="true"
                                className={`w-full p-4 pr-12 border-2 rounded-xl text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                                    touched.name 
                                        ? (errors.name 
                                            ? 'border-red-400 focus:ring-red-300' 
                                            : fieldValid.name 
                                                ? 'border-green-400 focus:ring-green-300' 
                                                : 'border-blue-200 focus:ring-blue-300'
                                        )
                                        : 'border-blue-200 focus:ring-blue-300'
                                }`}
                                placeholder="Enter your full name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                onBlur={() => setTouched(prev => ({ ...prev, name: true }))}
                                required
                            />
                            {touched.name && ( 
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    {errors.name ? (
                                        <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg> 
                                    ) : fieldValid.name ? (
                                        <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    ) : null}
                                </div>
                            )}
                        </div>
                        {errors.name && touched.name && <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">{errors.name}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-3 font-semibold text-left" htmlFor="phone">
                            Phone Number
                        </label>
                        <div className="relative">
                            <input
                                type="tel"
                                id="phone"
                                className={`w-full p-4 pr-12 border-2 rounded-xl text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                                    touched.phone 
                                        ? (errors.phone 
                                            ? 'border-red-400 focus:ring-red-300' 
                                            : fieldValid.phone 
                                                ? 'border-green-400 focus:ring-green-300' 
                                                : 'border-blue-200 focus:ring-blue-300'
                                        )
                                        : 'border-blue-200 focus:ring-blue-300'
                                }`}
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                onBlur={() => setTouched(prev => ({ ...prev, phone: true }))}
                                required
                            />
                            {/* Phone field validation messages */}
                            {touched.phone && (
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    {errors.phone ? (
                                        <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    ) : fieldValid.phone ? (
                                        <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    ) : null}
                                </div>
                            )}
                        </div>
                        {errors.phone && touched.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-3 font-semibold text-left" htmlFor="email">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                className={`w-full p-4 pr-12 border-2 rounded-xl text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                                    touched.email 
                                        ? (errors.email 
                                            ? 'border-red-400 focus:ring-red-300' 
                                            : fieldValid.email 
                                                ? 'border-green-400 focus:ring-green-300' 
                                                : 'border-blue-200 focus:ring-blue-300'
                                        )
                                        : 'border-blue-200 focus:ring-blue-300'
                                }`}
                                placeholder="Enter your email address"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                                required
                            />
                            {/* Email field validation messages */}
                            {touched.email && (
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    {errors.email ? (
                                        <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    ) : fieldValid.email ? (
                                        <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    ) : null}
                                </div>
                            )}
                        </div>
                        {errors.email && touched.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-6 flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-1/2">
                            <label className="block text-gray-800 mb-3 font-semibold text-left" htmlFor="date">
                                Preferred Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                className="w-full p-4 border-2 border-blue-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                placeholder="Preferred Date"
                                value={date}
                                onChange={e => setDate(e.target.value)}
                                required
                            />
                        </div>
                        {/* Time field validation messages */}
                        <div className="w-full md:w-1/2">
                            <label className="block text-gray-800 mb-3 font-semibold text-left" htmlFor="time">
                                Preferred Time
                            </label>
                            <input
                                type="time"
                                id="time"
                                className="w-full p-4 border-2 border-blue-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                placeholder="Preferred Time"
                                value={time}
                                onChange={e => setTime(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    {/* Stylist field validation messages */}
                    <div className="mb-6">
                        <label htmlFor="stylist" className="block text-gray-800 mb-3 font-semibold text-left">
                            Select a Stylist
                        </label>
                        <select
                            id="stylist"
                            value={selectedStylist}
                            onChange={e => setSelectedStylist(e.target.value)}
                            className="w-full p-4 border-2 border-blue-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                            required
                        >
                            {stylists.map((s) => (
                                <option key={s.name} value={s.name}>
                                    {s.name} - {s.bio}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* Service field validation messages */}
                    <div className="mb-8">
                        <label htmlFor="service" className="block text-gray-800 mb-3 font-semibold text-left">
                            What service would you like?
                        </label>
                        <textarea
                            id="service"
                            value={serviceRequest}
                            onChange={e => setServiceRequest(e.target.value)}
                            placeholder="Describe the service you want..."
                            required
                            className="w-full p-4 border-2 border-blue-200 text-gray-700 rounded-xl min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none placeholder:text-gray-400 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        />
                    </div>
                    {/* Submit button */}
                    <button type="submit" 
                    disabled={isLoading}
                    className={`w-full text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform ${
                        isLoading 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl'
                    }`}
                    >
                        {/* Submitting progress indicator */}
                        {isLoading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Booking...
                            </span>
                        ) : (
                            'Book Appointment'
                        )}
                    </button>
                </form>
            </main>
        </div>
    );
}