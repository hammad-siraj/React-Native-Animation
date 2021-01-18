export const images = [
  {
    uri:
      "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
    title: "Burger",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Pizza",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c2FuZHdpY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Sandwich",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Chicken",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Pancake",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
    title: "Burger",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Pizza",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c2FuZHdpY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Sandwich",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Chicken",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Pancake",
  },
];
export const data = images.map((data, index) => ({
  key: String(index + 1),
  image: data.uri,
  title: data.title,
  description:
    "It is a long established fact that a reader will be distracted by the readable content ",
}));

export let wholeData = [
  {
    name: "Recomended",
    subCategory: [
      {
        key: 0,
        image: images[0].uri,
        title: images[0].title,
        description:
          "It is a long established fact that a reader will be distracted by the readable content ",
      },
    ],
  },
  {
    name: "Pasta Pizza Party",
    subCategory: [
      {
        key: 1,
        image: images[1].uri,
        title: images[1].title,
        description:
          "It is a long established fact that a reader will be distracted by the readable content ",
      },
    ],
  },
  {
    name: "Veg Pizza",
    subCategory: [
      {
        key: 2,
        image: images[2].uri,
        title: images[2].title,
        description:
          "It is a long established fact that a reader will be distracted by the readable content ",
      },
    ],
  },
  {
    name: "Non-Veg Pizza",
    subCategory: [
      {
        key: 3,
        image: images[3].uri,
        title: images[3].title,
        description:
          "It is a long established fact that a reader will be distracted by the readable content ",
      },
    ],
  },
  {
    name: "Meals And Combo",
    subCategory: [
      {
        key: 4,
        image: images[4].uri,
        title: images[4].title,
        description:
          "It is a long established fact that a reader will be distracted by the readable content ",
      },
    ],
  },
];
