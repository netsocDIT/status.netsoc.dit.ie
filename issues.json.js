/**
 * Created with JetBrains WebStorm.
 * User: Graham
 * Date: 17/02/13
 * Time: 22:00
 * To change this template use File | Settings | File Templates.
 */
issues = [
    {
        type:"Systems Outage",
        date:"21/06/2013",
        title:"Some Internal Systems Down",
        level:2,
        desc:"We are still recovering some internal systems, these are being tracked under ticket #966213. Anyother services that are down, please email support@netsoc.dit.ie",
        fixed:false,
        updates:[
            {
                date:"21/06/2013 - 17:30",
                author:"Graham",
                update:"WebIRC and  git are back, waiting for an admin to work on Minecraft / ZNC"
            },
            {
                date:"22/06/2013 - 00:44",
                author:"Graham",
                update:"Minecraft is now back"
            }
        ]
    },
    {
        type:"Network Failure",
        date:"21/06/2013",
        title:"Internal Network Failure",
        level:3,
        desc:"As of 11.30 this morning we have lost all network traffic on our internal network. We have an admin en route to diagnose and fix. Will update this page as we know more",
        fixed:true,
        updates:[
            {
                date:"21/06/2013 - 15:30",
                author:"Graham",
                update:"We have restored connectivity. Looks like a power outage took out our switch and the UPS for it failed to restart"
            }
        ]
    },
    {
        type:"Network Failure",
        date:"23/03/2013",
        title:"Complete Network Failure",
        level:3,
        desc:"At 21.02 today, we got notification of a complete network failure from our monitoring systems.<br><br>The symptoms are similar to the network outage we experienced over christmas, but we do not have physical access to do diagnostics yet. It currently affects all servers, and websites hosted by NetSoc.<br><br> Our sysadmin team are monitoring the situation, and will update members when we have more information. <br><br>Anyone with any queries, email <a href='mailto:sysadmins@netsoc.dit.ie'>sysadmins@netsoc.dit.ie</a>, or join #dit on irc.freenode.net'",
        fixed:true,
        updates:[
            {
                date:"24/03/2013 - 18:00",
                author:"Graham",
                update:"We will have physical access on Monday morning, so we will have in depth diagnostics at that point.<br><br>Stay tuned for updates as we get them"
            },
	    {
		date:"25/03/2012 - 09:09",
		author:"Graham",
		update:"We seem to have resolved the issue, if you notice any problems, please email us <a href='mailto:sysadmins@netsoc.dit.ie'>sysadmins@netsoc.dit.ie</a>"
	    }
        ]
    },
    {
        type:"Single Site Issue",
        date:"07/02/2013",
        title:"edition.ie website down",
        level:2,
        desc:"The Wordpress install hosting this site had a security issue, and is currently being rebuild. Tracked as ticket #728112",
        fixed:true
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
    /*{
        type:"Outage",
        date:"TBC",
        title:"Societies Webserver Upgrade",
        duration:"1 Day",
        desc:"We will upgrading the webserver used to host the societies websites. This will involve some downtime. Will will advise all affected societies when we have a date"
    }*/
]
