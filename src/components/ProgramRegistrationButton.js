/**
 * @author: Jobet P. Casquejo
 * @description: ProgramRegistrationButton component to allow users to register for a wellness program.
 * This component handles loading and success states, and provides feedback to the user when the action is successful or failed.
 * Date: 2024-12-15
 * @version: 1.0.0
 * @license: MIT
 */
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

/**
 * ProgramRegistrationButton is a button component that triggers the program registration process.
 * It handles loading and success states and provides feedback to the user when the action is successful or failed.
 *
 * @component
 * @example
 * return (
 *   <ProgramRegistrationButton programId={123} onRegister={handleRegistration} />
 * )
 *
 * @param {number} programId - ID of the program the user is registering for.
 * @param {Function} onRegister - Callback function that handles the registration logic.
 * @returns {JSX.Element} A button component that allows users to register for a program.
 */
const ProgramRegistrationButton = ({ programId, onRegister }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  /**
   * Handle the registration process.
   * Sets loading state, calls the registration function, and updates the UI based on success or failure.
   */
  const handleClick = async () => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      const result = await onRegister(programId);
      if (result.success) {
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error("Error registering for program:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Returns a button style based on the current state (loading, success, error).
   */
  const buttonStyle = isLoading
    ? "bg-gray-400 cursor-not-allowed"
    : isSuccess
      ? "bg-green-500 hover:bg-green-600"
      : isError
        ? "bg-red-500 hover:bg-red-600"
        : "bg-blue-500 hover:bg-blue-600";

  /**
   * Returns the appropriate button text based on the current state.
   */
  const buttonText = isLoading
    ? "Registering..."
    : isSuccess
      ? "Registration Successful"
      : isError
        ? "Registration Failed"
        : "Register Now";

  return (
    <button
      onClick={handleClick}
      className={`w-full p-3 text-white rounded-md font-semibold ${buttonStyle} focus:outline-none`}
      disabled={isLoading || isSuccess}
      aria-live="polite"
      aria-disabled={isLoading || isSuccess}
    >
      {buttonText}
    </button>
  );
};

ProgramRegistrationButton.propTypes = {
  /**
   * The program's unique identifier.
   */
  programId: PropTypes.number.isRequired,

  /**
   * The callback function to handle the registration logic.
   * This function should return an object with a `success` property (boolean).
   */
  onRegister: PropTypes.func.isRequired,
};

export default ProgramRegistrationButton;
