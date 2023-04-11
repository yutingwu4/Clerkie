const data = [
  {
    name: "Sally Cooper",
    phone: "(470) 782-5471",
    email: "sallycooper@gmail.com",
    status: "Close Friends",
  },
  {
    name: "Judith Gonzalez",
    phone: "(123) 142-4123",
    email: "jgonzalez@gmail.com",
    status: "",
  },
  {
    name: "George Bryant",
    phone: "(393) 292-0983",
    email: "georgebryant@gmail.com",
    status: "",
  },
  {
    name: "Betty Wood",
    phone: "(273) 098-1029",
    email: "betty@gmail.com",
    status: "Super Close Friends",
  },
  {
    name: "Debra Russell",
    phone: "(412) 235-5321",
    email: "debrarussell@gmail.com",
    status: "Super Close Friends",
  },
  {
    name: "Rebecca Flores",
    phone: "(574) 243-2574",
    email: "rebeccaflores@gmail.com",
    status: "Close Friends",
  },
  {
    name: "Kim Holland",
    phone: "(357) 345-6324",
    email: "kimholland@gmail.com",
    status: "",
  },
];

export const getAllPeople = async (page) => {
    return data;
}