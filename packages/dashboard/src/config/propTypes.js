import PropTypes from 'prop-types';

export const guildProps = PropTypes.shape({
  id: PropTypes.string,
  iconURL: PropTypes.string,
  nameAcronym: PropTypes.string,
  owner: PropTypes.shape({
    id: PropTypes.string,
    tag: PropTypes.string,
    avatar: PropTypes.string,
    username: PropTypes.string,
    discriminator: PropTypes.string,
  }),
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  emojis: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      url: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  roles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      color: PropTypes.number,
      managed: PropTypes.bool,
    }),
  ),
  helpers: PropTypes.shape({
    prefix: PropTypes.string,
    language: PropTypes.string,
    nivel: PropTypes.shape({
      active: PropTypes.bool,
      roles: PropTypes.arrayOf(PropTypes.string),
    }),
    count: PropTypes.shape({
      text: PropTypes.string,
      model: PropTypes.string,
      channel: PropTypes.string,
    }),
    welcome: PropTypes.shape({
      private: PropTypes.shape({
        active: PropTypes.bool,
        channel: PropTypes.string,
      }),
      input: PropTypes.shape({
        active: PropTypes.bool,
        message: PropTypes.string,
        channel: PropTypes.string,
      }),
      leave: PropTypes.shape({
        active: PropTypes.bool,
        message: PropTypes.string,
        channel: PropTypes.string,
      }),
    }),
    harrypotter: PropTypes.shape({
      housePoints: PropTypes.shape({
        slytherin: PropTypes.number,
        ravenclaw: PropTypes.number,
        hufflepuff: PropTypes.number,
        gryffindor: PropTypes.number,
      }),
      houseRoles: PropTypes.shape({
        slytherin: PropTypes.string,
        ravenclaw: PropTypes.string,
        hufflepuff: PropTypes.string,
        gryffindor: PropTypes.string,
      }),
    }),
  }),
});

export const guildDefaultProps = {
  id: '',
  iconURL: '',
  nameAcronym: '',
  channels: [],
  emojis: [],
  roles: [],
  owner: {
    id: '',
    tag: '',
    avatar: '',
    username: '',
    discriminator: '',
  },
  helpers: {
    prefix: '',
    language: '',
    nivel: {
      active: false,
      roles: [],
    },
    count: {
      text: '',
      model: '',
      channel: '',
    },
    welcome: {
      private: {
        active: false,
        channel: '',
      },
      input: {
        active: false,
        message: '',
        channel: '',
      },
      leave: {
        active: false,
        message: '',
        channel: '',
      },
    },
    harrypotter: {
      housePoints: {
        slytherin: 0,
        ravenclaw: 0,
        hufflepuff: 0,
        gryffindor: 0,
      },
      houseRoles: {
        slytherin: '',
        ravenclaw: '',
        hufflepuff: '',
        gryffindor: '',
      },
    },
  },
};
