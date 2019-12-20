// Database connection
const pg = require("pg");
var conString = "postgres://srojqval:mCb4NeSu86J_cRvY6L6Vd9JsicGXI55O@rajje.db.elephantsql.com:5432/srojqval";
var client = new pg.Client(conString);


client.connect(function (err: any, res: any) {
    if (err) {
        console.log("could not connect to postgres",err);
    }

    else if (res) {
        return console.error("Database Connected");
    }
})

export default client

