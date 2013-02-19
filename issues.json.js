/**
 * Created with JetBrains WebStorm.
 * User: Graham
 * Date: 17/02/13
 * Time: 22:00
 * To change this template use File | Settings | File Templates.
 */
issues = [
    {
        type:"Single Site Issue",
        date:"07/02/2013",
        title:"edition.ie website down",
        level:2,
        desc:"The Wordpress install hosting this site had a security issue, and is currently being rebuild. Tracked as ticket #728112",
        fixed:false
    },
    {
        type:"Application Issue",
        date:"17/02/2013",
        title:"Minecraft server",
        level:1,
        desc:"The minecraft server is currently down, awaiting a rebuild by a sysadmin",
        fixed:false
    },
    {
        type:"Network Issue",
        date:"17/02/2013",
        title:"IRC IDENT issues",
        level:2,
        desc:"DIT was blocking incoming IDENT packets, causing people connecting to some outside IRC networks to have intermittent problems",
        fixed:true
    },
    {
        type:"Outage",
        date:"25/01/2013",
        title:"DIT Firewall Issues",
        level:3,
        desc:"We had issues with the DIT firewall upgrade, causing unpredictable issues for people connecting from outside DIT",
        fixed:true
    }
]

downtime = [
    {
        type:"Outage",
        date:"TBC",
        title:"Societies Webserver Upgrade",
        duration:"1 Day",
        desc:"We will upgrading the webserver used to host the societies websites. This will involve some downtime. Will will advise all affected societies when we have a date"
    }
]
