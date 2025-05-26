"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  acceptTerms: boolean;
  userName: string;
  userHobby: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function SignupPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    acceptTerms: false,
    userName: "",
    userHobby: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.firstName) newErrors.firstName = "First Name is required.";
    if (!formData.lastName) newErrors.lastName = "Last Name is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.dob) newErrors.dob = "Date of Birth is required.";
    if (!formData.acceptTerms) newErrors.acceptTerms = "You must accept the terms.";
    if (!formData.userName) newErrors.userName = "Username is required.";
    if (!formData.userHobby) newErrors.userHobby = "Please select a hobby.";

    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Submitted!", formData);
      alert("Signup Successful!");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Signup Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* First Name */}
        <div>
          <label className="block mb-1 font-medium">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>

        {/* Last Name */}
        <div>
          <label className="block mb-1 font-medium">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-1 font-medium">Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block mb-1 font-medium">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
        </div>

        {/* Username */}
        <div>
          <label className="block mb-1 font-medium">Username:</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.userName && <p className="text-red-500 text-sm">{errors.userName}</p>}
        </div>

        {/* Hobby */}
        <div>
          <label className="block mb-1 font-medium">User Hobby:</label>
          <select
            name="userHobby"
            value={formData.userHobby}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Hobby</option>
            <option value="Reading">Reading</option>
            <option value="Traveling">Traveling</option>
            <option value="Gaming">Gaming</option>
            <option value="Coding">Coding</option>
          </select>
          {errors.userHobby && <p className="text-red-500 text-sm">{errors.userHobby}</p>}
        </div>

        {/* Accept Terms */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <label className="text-sm">I accept the terms and conditions</label>
        </div>
        {errors.acceptTerms && <p className="text-red-500 text-sm">{errors.acceptTerms}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition"
        >
          Signup
        </button>
      </form>
    </div>
  );
}
