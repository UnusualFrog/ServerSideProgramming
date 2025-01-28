function showElement (element, level)
{
    if (element instanceof Array)
    {
        console.log ("\t".repeat(level)+"[Array]: size = " + element.length);
        for (var index=0; index<element.length; ++index)
        {
            showKeyValue (index, element[index], level+1);
        }
    
    }
    else if (element instanceof Object)
    {
        console.log ("\t".repeat(level)+"[Object]:");
        for (var prop in element)
        {
            showKeyValue (prop, element[prop], level+1);
        }
    }
}

function showKeyValue (key, value, level)
{
    if (value instanceof Object || value instanceof Array){
        console.log ("\t".repeat(level)+`[${key}]:`);
        showElement (value, level+1);
    }
    else {
        console.log ("\t".repeat(level)+`[${key}]:[${value}]`);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    let domain = "localhost:3000/api/"
    let recordType = "Courses";

    // Add and event listener to the Activate button.
    document.getElementById ("getCourses").addEventListener("click", async (evt) => {

        // if there are any child elements, remove them. We're getting
        // fresh information.
        let old = document.getElementById("root");
        if (old != null){
            old.parentElement.removeChild(old);
        }


        // Create a message that is to be sent to the Express.js server.
        const response = await fetch(`http://localhost:3000/api/courses`)
        .then((response) => response.json())
        .then((result) => {
            console.log (result);
            showElement (result, 0);
            
            // result.length will be the number of courses in the result set.
            // each course object will have attributes
            //  "courseName":String, "courseTitle":String,
            //  "sessions":Array of session Objs, "createdAt":Date, "updatedAt":Date
            // each session object will have attributes
            //  "day":Int, "startTime":Int, "duration":Int, "room":String

            // Let's add elements to display this information.
            if (result.length > 0) { // if there are any courses...

                // Create a container for all the info.
                let root = document.createElement("div");
                root.id = "root";

                // Then for each course, create a div. Then in that dive, create a button,
                // and another div to hold the information that pertains to that course.
                for (var c of result) {

                    // Create a div
                    let div = document.createElement("div");
                    div.id = `${c.courseName}Div`;
                    
                    // Create a button
                    let button = document.createElement("input");
                    button.id=`${c.courseName}`;
                    button.type="button";
                    button.value=`${c.courseName}`;
                    div.appendChild(button); // Add the button to the outer div

                    // Create a div container to hold the schedule info.
                    // Initially hidden.
                    let courseSessions = c.sessions;
                    let sch = document.createElement ("div");
                    sch.id = `${c.courseName}Sched`;
                    sch.hidden = true;
                    // insert the session schedule info.
                    for (s of c.sessions) {
                        sch.appendChild (document.createTextNode(
                            `day:${s.day}, startTime:${s.startTime}, duration:${s.duration}, location:${s.room}`));
                        sch.appendChild (document.createElement("br"));
                        }
                    div.appendChild(sch); // Add the schedule div to the outer div

                    button.addEventListener("click", () => {
                        // Clicking the button should show/hide the schedule info for that course.
                        sch.hidden = !sch.hidden;
                    })

                    // add the outer div to the DOM.
                    root.appendChild(div);
                }

                // Now link the new tree into existing DOM after the button.
                document.getElementById ("getCourses").parentElement.appendChild(root);

                // change the "Get Course" button value to "Refresh Courses"
                evt.target.value = "Refresh Courses"
            }
        })
        .catch((error) => console.error(error));
    })
});