/**
 * Created with JetBrains WebStorm.
 * User: Graham
 * Date: 17/02/13
 * Time: 22:10
 * To change this template use File | Settings | File Templates.
 */
var status = 0;
for (issue in issues) {
    var block = document.createElement('div');
    var icon = document.createElement('i');
    var label = document.createElement('span');
    var heading = document.createElement('h3');
    var desc = document.createElement('p');
    $(block).addClass('well');
    $(block).addClass('level_'+issues[issue].level);
    $(icon).addClass('icon-2x pull-right');
    $(label).addClass('label');

    if (issues[issue].fixed){
        $(label).text("Fixed: " + issues[issue].type);
        $(label).addClass('label-success');
        if (issues[issue].level == 3){
            $(icon).addClass('icon-fire');
        } else if (issues[issue].level == 2){
            $(icon).addClass('icon-warning-sign');
        } else if (issues[issue].level == 1){
            $(icon).addClass('icon-info-sign');
        }
    } else {
        $(label).text(issues[issue].type);
        if (issues[issue].level > status) status = issues[issue].level;
        if (issues[issue].level == 3){
            $(label).addClass('label-important');
            $(icon).addClass('icon-fire');
        } else if (issues[issue].level == 2){
            $(label).addClass('label-warning');
            $(icon).addClass('icon-warning-sign');
        } else if (issues[issue].level == 1){
            $(label).addClass('label-info');
            $(icon).addClass('icon-info-sign');
        }
    }
    $(heading).html(issues[issue].title + "<small> : "+ issues[issue].date +"</small>");
    $(desc).html(issues[issue].desc )
    $(block).append(icon);
    $(block).append(label);
    $(block).append(heading);
    $(block).append(desc);
    $(block).appendTo('#outages-container');
}

if (status == 0){
        top_banner('success', 'Netsoc has no issues - if you are having issues, let us know at <a href="https://support.netsoc.dit.ie">support.netsoc.dit.ie</a> ');
}else if (status == 1){
        top_banner('info', "Netsoc has a small issue - see below for details");
}else if (status == 2){
        top_banner('warning', "Our services have an issue - see below for details");
}else if (status == 3){
        top_banner('important', "Netsoc has a serious outage - see below for details");
}else{
        top_banner('important', "Netsoc has a serious outage - see below for details");
}
/***
 * @author Graham Hayes
 * @function
 * @description Creates the top banner based on highest level issue open
 * @param {String} level - highest level of issues
 * @param {String} text - text to display
 */
function top_banner(level, text){
    var inner_text = document.createElement('h2');
    $(inner_text).html(text);
    $('#top-banner').addClass('label-'+level).append(inner_text);
}

for (issue in downtime) {
    var block = document.createElement('div');
    var icon = document.createElement('i');
    var label = document.createElement('span');
    var heading = document.createElement('h3');
    var desc = document.createElement('p');
    $(block).addClass('well');
    $(icon).addClass('icon-2x pull-right');
    $(label).addClass('label label-info');
    $(label).text(downtime[issue].type);

    $(heading).html(downtime[issue].title + "<small> : "+ downtime[issue].date +" - Duration:"+ downtime[issue].duration +"</small>");
    $(desc).html(downtime[issue].desc )
    $(block).append(icon);
    $(block).append(label);
    $(block).append(heading);
    $(block).append(desc);
    $(block).appendTo('#downtime-container');
}
