import { Meteor } from 'meteor/meteor';

import './tabular';

Meteor.publishComposite('members', function(tableName, ids, fields) {
    return {
        find: function() {
            return Meteor.users.find({_id: {$in: ids}}, {fields: fields});
        }
    }
});



