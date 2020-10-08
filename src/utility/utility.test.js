import { descriptionChecker, updateObject, timeConverter } from "./utility";

describe("descriptionChecker", () => {
  const largeDescription = `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it to make a type specimen book. It has survived 
    not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged.`;

  const smallDescription = `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry`;

  it("returns shortended version of description if greater than 200 characters", () => {
    const shortendedDescription = descriptionChecker(largeDescription);
    expect(shortendedDescription.length).toBe(203);
  });

  it("returns description if description is not greater than 200 characters", () => {
    const description = descriptionChecker(smallDescription);
    expect(description.length).toBe(smallDescription.length);
  });
});

describe("timeConverter", () => {
  it("coverts minutes to H:M format", () => {
    const runtime = 190;
    const time = timeConverter(runtime);
    expect(time).toEqual("3h 10m");
  });
});
