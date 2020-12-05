import { descriptionChecker, timeConverter } from "./utility";

describe("descriptionChecker", () => {
  const longDescription = `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it to make a type specimen book. It has survived 
    not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged.`;

  const shortDescription = `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry`;

  const longTitle = `Lorem Ipsum is simply dummy text of the printing`;

  const shortTitle = `Lorem Ipsum`;

  it("returns shortended version of description if title is greater than 29 characters", () => {
    const shortendedDescription = descriptionChecker(
      longTitle,
      longDescription
    );
    expect(shortendedDescription.length).toBe(133);
  });

  it("returns shortended version of description if greater than 180 characters", () => {
    const shortendedDescription = descriptionChecker(
      shortTitle,
      longDescription
    );
    expect(shortendedDescription.length).toBe(183);
  });

  it("returns description if description and title length are okay", () => {
    const description = descriptionChecker(shortTitle, shortDescription);
    expect(description.length).toBe(shortDescription.length);
  });
});

describe("timeConverter", () => {
  it("coverts minutes to H:M format", () => {
    const runtime = 190;
    const time = timeConverter(runtime);
    expect(time).toEqual("3h 10m");
  });
});
