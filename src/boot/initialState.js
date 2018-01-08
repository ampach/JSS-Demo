
const initialState = () => ({
  sitecore: {
    context: {
      pageEditing: false
    },
    route: {
      placeholders: {},
    },
  },
  viewBag: {},
});

// allows consumers to mutate the object without interfering with other imports
export default initialState;
