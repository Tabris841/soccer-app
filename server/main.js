import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players';

Meteor.startup(() => {
  Meteor.publish('publish', () => Players.find({}));
});
