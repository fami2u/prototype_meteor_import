import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Meteor.users.attachSchema(new SimpleSchema({
  username: {
    type: String,
    label: "用户名",
  },
  tel: {
    type: Number,
    label: "手机号",
  },
  balance: {
    type: Number,
    label: "账户余额",
  },
  point: {
    type: Number,
    label: "积分",
  },
  createdat: {
    type: Date,
    label: "创建时间",
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    }
  }
}));

export default {Members}