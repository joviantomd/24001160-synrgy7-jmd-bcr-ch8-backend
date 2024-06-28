import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("cars").del();

  // Inserts seed entries
  await knex("cars").insert([
    {
      id:"1",
      user_id: 888,
      name: "Toyota Supra",
      price: "3500000000",
      category: "small",
      image: "https://res.cloudinary.com/dsozzm34s/image/upload/v1716114894/ch-5-challenge/Toyota-supra_pgqkzl.jpg",
      start_date: "2024/02/16",
      end_date: "2024/09/15",
      availability: true,
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      createdBy:"admin",
      updatedBy:"admin"
    },
    {
      id:"2",
      user_id: 999,
      name: "Skyline GTR",
      price: "1000000000",
      category: "medium",
      image: "https://res.cloudinary.com/dsozzm34s/image/upload/v1716114854/ch-5-challenge/skylineGTR_mppl75.jpg",
      start_date: "2024/02/16",
      end_date: "2024/02/16",
      availability: false,
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      createdBy:"admin",
      updatedBy:"admin"
    },
    {
      id:"3",
      user_id: 999,
      name: "Lamborghini Aventador",
      price: "12500000000",
      category: "large",
      image: "https://res.cloudinary.com/dsozzm34s/image/upload/v1716114873/ch-5-challenge/Lamborghini-aventador_qvxgnl.jpg",
      start_date: "2024/02/16",
      end_date: "2024/02/16",
      availability: true,
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      createdBy:"admin",
      updatedBy:"admin"
    },
    {
      id:"4",
      user_id: 999,
      name: "Lamborghini Aventador",
      price: "670000000",
      category: "medium",
      image: "https://res.cloudinary.com/dsozzm34s/image/upload/v1716114873/ch-5-challenge/Lamborghini-aventador_qvxgnl.jpg",
      start_date: "2024/02/16",
      end_date: "2024/02/16",
      availability: true,
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      createdBy:"admin",
      updatedBy:"admin"
    },
    {
      id:"5",
      user_id: 999,
      name: "Lamborghini Aventador",
      price: "50000000",
      category: "small",
      image: "https://res.cloudinary.com/dsozzm34s/image/upload/v1716114873/ch-5-challenge/Lamborghini-aventador_qvxgnl.jpg",
      start_date: "2024/02/16",
      end_date: "2024/02/16",
      availability: true,
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      createdBy:"admin",
      updatedBy:"admin"
    }
  ]);
}
