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
    name: "Ali Wong",
    phone: "(357) 345-6324",
    email: "babycobra@gmail.com",
    status: "Close Friends",
  },
  {
    name: "Taylor Tomlinson",
    phone: "(470) 782-5471",
    email: "armfloaties@gmail.com",
    status: "",
  },
  {
    name: "Wanda Sykes",
    phone: "(123) 142-4123",
    email: "wsykes@gmail.com",
    status: "",
  },
  {
    name: "Ellen Degeneres",
    phone: "(393) 292-0983",
    email: "ellen@gmail.com",
    status: "",
  },
  {
    name: "Amy Schumer",
    phone: "(273) 098-1029",
    email: "lowerbacktattoo@gmail.com",
    status: "Super Close Friends",
  },
  {
    name: "Chelsea Handler",
    phone: "(412) 235-5321",
    email: "chuck@gmail.com",
    status: "Super Close Friends",
  },
  {
    name: "Anjelah Johnson",
    phone: "(574) 243-2574",
    email: "bonquiqui@gmail.com",
    status: "Close Friends",
  },
  {
    name: "Mae Martin",
    phone: "(357) 345-6324",
    email: "sap@gmail.com",
    status: "",
  },
];

export const getAllPeople = async (page) => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            size: data.length,
            results: data.slice(page * 5, (page + 1) * 5),
          }),
        3000
      );
    });

  // infinite scrolling, no stop at end of data
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(data), 3000);
//   });
};
