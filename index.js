const { createPost } = require("./Postcrud/CreateNewPost");
const { createUser } = require("./Usercrud/createNewUser");

// const user = {
//   name: "Feroz khan ",
//   email: "FerozKhan@example.com",
//   age: 24,
// };
// createUser(" http://localhost:3000/users", user);
const newPost = {
  userid: 1,
  title: " The case against rearrangement of local sovereign debt",
  description:
    "no THERE has been talk lately about the requirem­ent of local currency debt rearrangement for Pakis­tan, necessitated by the fact that the government’s debt servicing, budgeted for 2023-24 at Rs7.4 trillion, has increased to approximately 75 per cent of total tax collection and exceeds the net revenues, after transfer to provinces, of Rs6.9tn. yet",
};

createPost(" http://localhost:3000/post", newPost);
