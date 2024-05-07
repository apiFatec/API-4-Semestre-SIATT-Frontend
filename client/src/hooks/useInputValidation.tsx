import { useState } from "react";

const useInputValidation = () => {
    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState("");
  
    const validateInput = (value: any) => {
      const isValid = value.trim() !== "";
      setIsValid(isValid);
      setError(isValid ? "" : "Campo obrigatório");
      return isValid;
    };
  
    const validateMeetingData = (meetingData: any) => {
      return validateInput(meetingData.topic);
    };
  
    return { isValid, error, validateMeetingData, validateInput, setError };
  };
  
  export default useInputValidation;
  