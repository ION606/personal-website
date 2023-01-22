function langs(name) {
    const win = window.open("", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=500,height=500");
    let desc = "";
    
    if (name =="javascript") {
        desc = "I used Javascript when creating the <a href=\"https://selmerbot.com\">Selmer Bot Website</a>";
    } else if (name == "node.js") {
        desc = "I used node.js when creating <a href=\"https://docs.selmerbot.com\">Selmer Bot</a>.";
        desc += " I am well versed in many libraries including express.js, axios, Sequelize, MongoDb, and many more!";
    } else if (name == "asp.net") {
        desc = "I used ASP.NET (and ASP.NET Core) to create an API endpoint in order to recieve and process data";
        desc += " to use in machine learning";
    } else if (name == "c++") {
        desc = "I used C++ to re-construct most basic classes including";
        desc += " <b>vector, doubly-linked list, rope, map, hash map, and auto pointer</b>";
    } else if (name == "c#") {
        desc = "I used C# to create games using the Unity game engine, as well as";
        desc += " some basic desktop apps";
    } else if (name == "c") {
        desc = "I used C to write a recursive matrix ultiplication algorithm, as well as model ";
        desc += "circuity components such as a multiplexer, and ALU";
    } else if (name == "python") {
        desc = "I used python to create Machine Learning models using the ";
        desc += "<b>sklearn</b> and <b>lightgbm</b> libraries. I also used <b>pandas</b>";
        desc += " to perform pre and post-processing on the data for and from these models, ";
        desc += "as well as using matplotlib to graph the resulting data points and model linear regression";
    } else if (name == "mips") {
        desc = "I used MIPS to write a matrix-multiplication algorithm, as well as dynamically";
        desc += " allocate a two-dimensional array in data memory";
    } else if (name == "verilog") {
        desc = "I used Verilog to model a datapath, complete with Jumps, a fully-functioning ALU";
        desc += " reading and writing to both registers and data memory, as well as pipelining";
    } else { return; }


    var txt = `<script>window.onbeforeunload = function() {window.close();}</script>`;
    txt += `<link rel="stylesheet" type="text/css" href="/personal-website/CSS/popups.css">`;
    txt += `<img src="https://github.com/ION606/personal-website/blob/main/icons/${(name == "c#") ? "csharp" : name}.png?raw=true">`;
    txt += `<h1>${name}</h1>`;
    txt += `<p>${desc}</p>`;

    win.document.write(txt);
}


function ml(name) {
    var url = "";

    if (name == "scikitlearn") {
        url = "https://scikit-learn.org/stable/";
    } else if (name == "lightgbm") {
        url = "https://lightgbm.readthedocs.io/en/latest/index.html";
    } else if (name == "tensorflow") {
        url = "https://www.tensorflow.org/"
    } else { return; }

    window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=500,height=500");
}


function data() {
    const win = window.open("", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=500,height=500");
    var txt = `<h1>Data Analytic and Processing</h1>`;
    var desc = `I used the lightgbm and scikit-learn libraries to prepair the data for machine learning models, `;
    desc += `as well as using Pandas to present the data presented by said models`;

    txt += `<script>window.onbeforeunload = function() {window.close();}</script>`;
    txt += `<link rel="stylesheet" type="text/css" href="/personal-website/CSS/popups.css">`;

    txt += `<p>${desc}</p>`
    win.document.write(txt);
}


function APIs() {
    const win = window.open("", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=500,height=500");
    var txt = `<h1>API's</h1>`;
    var desc = `I used Node.js to work with the <a href="https://stripe.com/">Stripe API</a> `;

    desc += `as well as using Postman to test a custom API-endpoint I created to send and `;
    desc += `recieve data for and from my machine learning models`;

    txt += `<p>${desc}</p>`;
    txt += `<script>window.onbeforeunload = function() {window.close();}</script>`;
    txt += `<link rel="stylesheet" type="text/css" href="/personal-website/CSS/popups.css">`;
    win.document.write(txt);
}



function openURL(url) {
    window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=500,height=500");
}


function databases(name) {
    if (name == "sqlite") {
        openURL("https://www.sqlite.org/index.html");
    } else if (name == "mysql") {
        openURL("https://www.mysql.com/");
    } else {
        const win = window.open("", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=500,height=500");
        var txt = `<img src="https://github.com/ION606/personal-website/blob/main/icons/mongodb.png?raw=true">`;
        
        txt += `<h1>MongoDB</h1><p>`;
        txt += "I use MongoDB when creating <a href=\"https://docs.selmerbot.com\">Selmer Bot</a>.";
        txt += "This includes the use of data aggregation, nested queries, mapping, and more</p>";

        txt += `<link rel="stylesheet" type="text/css" href="/personal-website/CSS/popups.css">`;
        txt += `<script>window.onbeforeunload = function() {window.close();}</script>`;
        win.document.write(txt);
    }
}


function showSkill(name, parent) {
    if (parent == "langs") {
        langs(name);
    } else if (parent == "ml") {
        ml(name);
    } else if (parent == "databases") {
        databases(name);
    } else if (parent =="platforms") {
        if (name == "github") {
            window.open('https://github.com/ION606', '_blank');
        }
    } else if (parent == "other") {
        switch (name) {
            case 'data processing': data();
            break;

            case 'apis': APIs();
            break;

            default: return;
        }
    }
}