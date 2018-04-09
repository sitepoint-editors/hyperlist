const actions = {
  add: () => state => ({
    input: '',
    items: state.items.concat({
      value: state.input,
      completed: false,
      id: Date.now()
    })
  }),
  input: ({ value }) => ({ input: value }),
  toggle: id => state => ({
    items: state.items.map(item => (
      id === item.id ? Object.assign({}, item, { completed: !item.completed }) : item
    ))
  }),
  destroy: id => state => ({
    items: state.items.filter(item => item.id !== id)
  }),
  clearAllCompleted: ({ items }) => ({
    items: items.filter(item => !item.completed)
  })
};

export default actions;
