 
import{ useState } from 'react';

const DynamicForm = () => {
  const [fields, setFields] = useState([{ value: '' }]);

  const handleAddField = () => {
    setFields([...fields, { value: '' }]);
  };

  const handleRemoveField = (index:any) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  const handleChange = (index, event) => {
    const newFields = fields.map((field, i) => 
      i === index ? { ...field, value: event.target.value } : field
    );
    setFields(newFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', fields);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            value={field.value}
            onChange={(event) => handleChange(index, event)}
          />
          <button type="button" onClick={() => handleRemoveField(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddField}>
        Add Field
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;

// Explanation:
// State Management: The fields state holds an array of objects, each representing an input field.
// Add Field: The handleAddField function adds a new field to the state.
// Remove Field: The handleRemoveField function removes a field based on its index.
// Change Handler: The handleChange function updates the value of a specific field.
// Form Submission: The handleSubmit function logs the form data to the console.

// This component is adaptable and can be customized further based on your specific requirements.