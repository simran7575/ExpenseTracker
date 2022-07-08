import Category from "../models/category";

export const CategoriesList = [
  new Category(
    1,
    "Bank",
    "Fri 10AM",
    "340",
    require("../assets/images/bank.png")
  ),
  new Category(
    2,
    "Automobile",
    "Mon 8AM",
    "70",
    require("../assets/images/auto.png")
  ),
  new Category(
    3,
    "Gift",
    "Sat 6PM",
    "110",
    require("../assets/images/gift.png")
  ),
  new Category(
    4,
    "Eating",
    "Sun 5PM",
    "60",
    require("../assets/images/eating.png")
  ),
  new Category(
    5,
    "Charity",
    "Wed 12PM",
    "1200",
    require("../assets/images/charity.png")
  ),
  new Category(
    6,
    "Cash",
    "Fri 8PM",
    "200",
    require("../assets/images/cash.png")
  ),
];
