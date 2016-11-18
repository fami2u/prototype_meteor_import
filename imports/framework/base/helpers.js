import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { CryptoJS } from 'meteor/jparker:crypto-hmac';


    //反转数组
    Template.registerHelper("reverse", function(arr) {
        if (arr) {
            return arr.reverse();
        } else {
            return [];
        }

    });
    //随机颜色
    Template.registerHelper("randomColor", function(s) {
        s = CryptoJS.MD5(s).toString();
        var str = "";
        for (var i = 0; i < s.length; i++) {
            str += s.charCodeAt(i).toString(16);
            if (str.length == 6) {
                return str;
            }
        }
  
    });
    //保留两位小数
    Template.registerHelper("fix", function(num) {
        return num * 1 ? (num * 1).toFixed(2) : "0.00";

    });
    //比较是否相同
    Template.registerHelper("compare", function(str1,str2) {
        return str1 == str2;
    });
// ====================================================
//     格式化日期
// ====================================================
Template.registerHelper('dateformat', function(time) {
    if (!time) return "-/-/-";
    return new moment(time).format("YYYY/MM/DD");
});
// ====================================================
//     格式化时间
// ====================================================
Template.registerHelper('timeformat', function(time) {
    if (!time) return "-/-/- --:--";
    return new moment(time).format("YYYY/MM/DD HH:mm");
});
// ====================================================
//     获取url绝对路径
// ====================================================
Template.registerHelper('absoluteUrl', function(uri) {
    return Meteor.absoluteUrl(uri);
});
Template.registerHelper("format", function(str) {
    if (str) {
        var d = new Date(str);

        return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    } else {
        return "-/-/-"
    }

});
// ====================================================
//     隐藏字符串内容，只保留第一个字符和最后一个
// ====================================================
Template.registerHelper('marker', function(str) {
    if (!str) return "***";
    return str.substring(0, 1) + '**' + str.substring(str.length - 1, str.length);
});
// ====================================================
//     显示图像图片，如果没有显示默认头像
// ====================================================
Template.registerHelper('avatar', function(image) {
    if (image) {
        if (image.length > 17) {
            if (image.indexOf('wx.qlogo.cn') > 0) {
                return image.substring(0, image.lastIndexOf('/')) + '/96';
            } else {
                return image;
            }
        } else {
            return '/cfs/files/avatar/' + image;
        }
    } else {
        return '/images/profile-default.jpg';
    }
});
// ====================================================
//     显示图片，如果没有显示默认图片
// ====================================================
Template.registerHelper('images', function(image) {
    if (image) {
        if (image.length > 17) {
            return image;
        } else {
            return '/cfs/files/images/' + image;
        }
    } else {
        return '/images/upload_file.svg';
    }
});
// ====================================================
//     获取 aliyun oss 的图片地址 
// ====================================================
Template.registerHelper('imageByOSS', function(id) {
    const ready = Meteor.subscribe('image', id).ready();
    if (ready) {
        const img = Images.findOne(id);
        if (img) {
            return img.OSSUrl();
        }
    }
    return '/images/profile-default.jpg';
});
// ====================================================
//     判断是否是手机
// ====================================================
Template.registerHelper('isMobile', function(str, n) {
    return isMobile();
});
// ====================================================
//     判断模板是否存在
// ====================================================
Template.registerHelper('isTemplate', function(name) {
    return !!Template[name];
});

Template.registerHelper('ternary', function(key,value1, value2) {
    return key?value1:value2;
});
// ====================================================
//     显示图片，如果没有显示默认图片
// ====================================================
Template.registerHelper('shareimage', function(image) {
    if (image) {
        if (image.length > 17) {
            return image;
        } else {
            if (Meteor.isDevelopment) {
                return '/cfs/files/images/' + image;
            } else {
                return '/cfs/files/images/' + image;
            }
        }
    } else {
        return '/images/upload_file.svg';
    }
});

