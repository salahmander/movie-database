export const descriptionChecker = (description) => {
  if (description.length > 200) {
    return description.substring(0, 200) + "...";
  }
  return description;
};

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

// Converts movie runtime minutes to H:M
export const timeConverter = (runtime) => {
  let hours = Math.floor(runtime / 60);
  let minutes = runtime % 60;
  return `${hours}h ${minutes}m`;
};