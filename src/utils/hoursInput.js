export const validate = (values) => {
  const error = {};

  if (!values.start) {
    error.message = 'Enter arriving time';
  } else if (!values.end) {
    error.message = 'Enter exiting time';
  } else if (values.start && values.end) {
    if (values.start > values.end)
      error.message = 'Arriving time should be less than exiting';
  }

  return error;
};

export const validateOptinalField = (values) => {
  const error = {};

  if (values.start && !values.end) {
    error.message = 'Enter end time';
  } else if (values.end && !values.start) {
    error.message = 'Enter start time';
  } else if (values.start && values.end) {
    if (values.start > values.end)
      error.message = 'Start time should be less than end';
  }

  return error;
};
