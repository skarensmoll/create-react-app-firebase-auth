import React, {useState} from 'react';
import {Input} from 'components/UI';


const useForm = (formConfig) => {
  const [form, setForm] = useState(formConfig);

  const onFieldChange = ({target: {value}}, idField) => {
    setForm((form) => {
      return {
        ...form,
        [idField]: {
          ...form[idField],
          value,
        },
      };
    });
  };

  const renderFormFields = (
    Object.keys(form).map((idField) => {
      return (
        <Input
          key={idField}
          id={idField}
          onChange={(e)=> onFieldChange(e, idField)}
          {...form[idField]} />
      );
    })
  );

  return {formFields: form, renderFormFields};
};

export default useForm;
