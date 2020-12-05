export const descriptionChecker = (title, description) => {
  // check if the title is too long if so limit the description
  if (title.length > 29) {
    return description.substring(0, 130) + "...";
  // check if description is too long if so limit the description
  } else if (description.length > 180) {
    return description.substring(0, 180) + "...";
  }
  // description is fine as it is
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
