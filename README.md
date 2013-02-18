status.netsoc.dit.ie
====================

# New Issue

* Add the JSON below to the top of the issues array ( __INCLUDE THE COMMA__ )
* Change the fields to match
* Commit (and push if done remotely)
* Fix issue

```Javascript
{
        type:"", //Shown in the label at the top left
        date:"dd/mm/yyyy", //Todays date
        title:"", //Heading
        level:1, //Determins colour of label, and icon on the right 1 = lowest, 3 = highest
        desc:"", // The text shown in the issue. Can be html if needed for links etc. Please try and keep it style free.
        fixed:false //If your adding it, chances are its not fixed ;-) 
},
```

# Fixed Issue

* Change the 
```
fixed:false 
```
to 
```
fixed:true 
```

# Planed downtime
* Add the JSON below to the top of the downtime array ( __INCLUDE THE COMMA__ )
* Change the fields to match
* Commit (and push if done remotely)

```Javascript
{
        type:"", //Shown in the label at the top left
        date:"dd/mm/yyyy", //Todays date
        title:"", //Heading
        desc:"", // The text shown in the issue. Can be html if needed for links etc. Please try and keep it style free.
        duration:"" //How long you think the service will be down
},
```

# When the downtime happens
* Move the JSON blob from the ```downtime``` array  to the ```issues``` array
* Add to the end

```Javascript
level:1, //Determins colour of label, and icon on the right 1 = lowest, 3 = highest (eg if chef is gone, 3 is a good number)
fixed:false 
```
