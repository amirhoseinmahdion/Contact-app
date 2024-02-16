export const ValidForm = (form) => {
  let error = ""

  if (!form.name || !form.lastname || !form.email || !form.phone) {
    error = "Error For Compelete Form";
  }

  return error;
};
