/**
 * @author: Jobet P. Casquejo
 * @description: EnrollmentForm component handles the enrollment process for users to register for wellness programs.
 * The form includes fields such as name, email, and program selection, with validation to ensure the data is correct.
 * On successful submission, the data is passed back to the parent component through a callback function.
 * Date: 2024-12-15
 * @version: 1.0.0
 * @license: MIT
 */
import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * EnrollmentForm component handles the enrollment process for users to register for wellness programs.
 * The form includes fields such as name, email, and program selection, with validation to ensure the data is correct.
 * On successful submission, the data is passed back to the parent component through a callback function.
 *
 * @component
 * @example
 * return <EnrollmentForm onSubmit={handleFormSubmit} programs={programs} />
 *
 * @param {Function} onSubmit - Callback function to handle form submission with the collected form data.
 * @param {Array} programs - List of available wellness programs to display in the dropdown.
 * @returns {JSX.Element} The enrollment form.
 */
const EnrollmentForm = ({ onSubmit, programs }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required.";
    }
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formData.program) {
      errors.program = "Program selection is required.";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    onSubmit(formData)
      .then(() => {
        setFormData({ name: "", email: "", program: "" });
        setErrors({});
      })
      .catch((error) => {
        console.error("Form submission error: ", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="enrollment-form-container flex flex-col items-center p-6">
      <h2 className="text-3xl font-semibold mb-6">Enroll in a Program</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div className="form-group">
          <label htmlFor="name" className="block text-lg font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="block text-lg font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your email address"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="program" className="block text-lg font-medium">
            Select Program
          </label>
          <select
            id="program"
            name="program"
            value={formData.program}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="">Select a Program</option>
            {programs.map((program) => (
              <option key={program.id} value={program.id}>
                {program.name}
              </option>
            ))}
          </select>
          {errors.program && (
            <span className="text-red-500 text-sm">{errors.program}</span>
          )}
        </div>

        <div className="form-actions mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Enrollment"}
          </button>
        </div>
      </form>
    </div>
  );
};

EnrollmentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  programs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default EnrollmentForm;
