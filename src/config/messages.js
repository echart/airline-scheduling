const messages = {
  rotation: {
    add: 'Add flight to rotation',
    remove: 'Remove flight from rotation',
    empty: 'There are no flights for the selected aircraft.',
    confirm_remove: 'This action will delete this flight and all subsequent ones, are you sure?'
  },
  reasons: {
    time: 'The departure should be 20 minutes higher than the arrival of the last flight.',
    airport: 'The origin is not from the current airport.',
    midnight: 'All aircrafts must be on the ground at midnight.',
  }
}

export default messages;
