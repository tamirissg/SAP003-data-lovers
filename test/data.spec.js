require("../src/data.js");

const dataExample = 
[{"id": 1, "name": "Rick Sanchez", "status": "Alive", "gender": "Male"},
  {"id": 2, "name": "Morty Smith", "status": "Alive", "gender": "Male"},
  {"id": 3, "name": "Summer Smith", "status": "Alive", "gender": "Female"},
  {"id": 4, "name": "Beth Smith", "status": "Alive", "gender": "Female"}, 
  {"id": 5, "name": "Jerry Smith", "status": "Alive", "gender": "Male"}];

describe("e uma funcao", () => {
  it("is a function", () => {
    expect(typeof app.sortNames).toBe("function");
  });

  it("returns `Sort`", () => {
    expect(app.sortNames(dataExample, "sortAZ")).toEqual(
      [{"gender": "Female", "id": 4, "name": "Beth Smith", "status": "Alive"},
        {"gender": "Male", "id": 5, "name": "Jerry Smith", "status": "Alive"},
        {"gender": "Male", "id": 2, "name": "Morty Smith", "status": "Alive"},
        {"gender": "Male", "id": 1, "name": "Rick Sanchez", "status": "Alive"}, 
        {"gender": "Female", "id": 3, "name": "Summer Smith", "status": "Alive"}]
    );
  });

  it("returns `Sort`", () => {
    expect(app.sortNames(dataExample, "sortZA")).toEqual(
      [{"gender": "Female", "id": 3, "name": "Summer Smith", "status": "Alive"},
        {"gender": "Male", "id": 1, "name": "Rick Sanchez", "status": "Alive"}, 
        {"gender": "Male", "id": 2, "name": "Morty Smith", "status": "Alive"}, 
        {"gender": "Male", "id": 5, "name": "Jerry Smith", "status": "Alive"}, 
        {"gender": "Female", "id": 4, "name": "Beth Smith", "status": "Alive"}]
    );
  });
});

describe("e uma funcao", () => {
  it("is a function", () => {
    expect(typeof app.filterStatus).toBe("function");
  });
  it("returns `Filter`", () => {
    expect(app.filterStatus(dataExample, "Alive")).toEqual([
      {"id": 1, "name": "Rick Sanchez", "status": "Alive", "gender": "Male"},
      {"id": 2, "name": "Morty Smith", "status": "Alive", "gender": "Male"},
      {"id": 3, "name": "Summer Smith", "status": "Alive", "gender": "Female"},
      {"id": 4, "name": "Beth Smith", "status": "Alive", "gender": "Female"}, 
      {"id": 5, "name": "Jerry Smith", "status": "Alive", "gender": "Male"}]);
  });
});

describe("e uma funcao", () => {
  it("is a function", () => {
    expect(typeof app.filterData).toBe("function");
  });
  it("returns `Filter`", () => {
    expect(app.filterData(dataExample, "Female")).toEqual([
      {"id": 3, "name": "Summer Smith", "status": "Alive", "gender": "Female"},
      {"id": 4, "name": "Beth Smith", "status": "Alive", "gender": "Female"}]);
  });
});

describe("e uma funcao", () => {
  it("is a function", () => {
    expect(typeof app.percCalculation).toBe("function");
  });
  it("returns `Filter`", () => {
    expect(app.percCalculation(dataExample)).toBe("1");
  });
});