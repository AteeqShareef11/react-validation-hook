import { useState } from "react";

const useForm = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validateField = (fieldName, value) => {
    // Ensure that validationRules is defined
    if (!validationRules) return "";

    const fieldValidation = validationRules[fieldName];
    if (!fieldValidation) return "";

    return fieldValidation(value, values);
  };

  const handleOnChange = (e, nameField) => {
    let value;
    let name = nameField;
    if (e?.target) {
      value = e.target.value;
      name = e.target.name;
    } else {
      value = e;
    }

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const validateAllFields = () => {
    const tempErrors = {};
    let isValid = true;

    Object.keys(values).forEach((fieldName) => {
      const error = validateField(fieldName, values[fieldName]);

      tempErrors[fieldName] = error;
      if (error) {
        isValid = false;
      }
    });
    setErrors(tempErrors);
    return isValid;
  };

  const setFormValues = (newValues) => {
    setValues((prevValues) => ({
      ...prevValues,
      ...newValues,
    }));
  };

  return {
    values,
    errors,
    handleOnChange,
    validateAllFields,
    setFormValues,
  };
};

export default useForm;
