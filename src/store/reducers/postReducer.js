const initState = [
  {
    id: "1",
    title: "Nostrud velit",
    content:
      "Nostrud velit velit consectetur adipisicing fugiat elit nulla ea qui officia.",
  },
  {
    id: "2",
    title: "Anim dolore excepteur",
    content:
      "Anim dolore excepteur magna non consequat sunt aliqua excepteur laborum.",
  },
];
const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      return [...state, action.post];
    case "DELETE_POST":
      const newPost = state.filter((post) => post.id !== action.id);
      return [...newPost];
    default:
      return state;
  }
};

export default postReducer;
