const express = require('express');
const PORT = 8008;
const fs = require("fs");
const path = "./users.json"
const app = express();
app.use(express.json());// req.body ko use karna ka liya // req.body ko get karwna ka liya .. raw
app.use(express.urlencoded({ extended: true })); // form 

app.get('/users', (req, res) => {
    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
    });
});
app.get('/users/:id', (req, res) => {
    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        const colleges = JSON.parse(data);
        // let datac = JSON.parse(data);
        let myClg = {};
        for(let i=0; i<colleges.length; i++){
            if(colleges[i].id == req.params.id){
                myClg = colleges[i];
                break;
            }
        }
        res.send(myClg); 
        // res.send(JSON.parse(data));
    });
});

app.post('/user', (req, res) => {
    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            // console.log("err",err);
            throw err;
        }
        // console.log(req.params);
        const new_id = Date.now().toString();
        // // console.log("typeof(data)", typeof (data));
        // let givenid=req.params.id;
        let datac = JSON.parse(data)
        // console.log("datac", datac);
        console.log("req.body", req.body);
        // // console.log("typeof req body", typeof (req.body));
        // // console.log("typeof(datac)", typeof (datac));
        let request_body = req.body;
        // // console.log("req.......................body", request_body);
        // // console.log("typeof req................body", typeof (request_body));
        request_body.id = new_id
        datac = [...datac, request_body]
        // console.log("\n\n\n\ndatac", datac);
        // // console.log("typeof(datac)", typeof (datac));
        data_stringified = JSON.stringify(datac);
        fs.writeFile(path, data_stringified, "utf8", (err) => {
            if (err) {
                // return console.log(err);
            }
            // console.log('written to file');
        });

        // // res.status(200).send(`added user with id: ${new_id} `);
        res.send(data);
    })

    // read_data(data=>{

    //     const new_id=Date.now.toString();
        // console.log("req.type",typeof(req.body));
    //     data[new_id.toString()]=req.body;

    // add_data(JSON.stringify(data,null,2),()=>{
    //     });
    // },true);
    // new_user_added_data=datac;
    // console.log("typeof new user added data",typeof(new_user_added_data));
    // console.log("new user added data ",(new_user_added_data));
});

//UPDATE KE LIYE
app.put('/user/:id', (req, res) => {
    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            // console.log("err", err)
            throw err;
        }
        const req_id = req.params["id"]; 
        console.log("req_id", req_id);
        // console.log("typeof(data)", typeof (data));
        let datac = JSON.parse(data);

        // console.log("datac", datac);
        console.log("req.body", req.body);
        //req.parms object return karta hai . se use karta hai
        // body ka ander value detha hai
        // console.log("typeof req body", typeof (req.body));
        // console.log("typeof(datac)", typeof (datac));
        //let element=req.body;
        for (let element of datac) {
            if (element.id == req_id) {
                element.name = req.body.name;
                element.address = req.body.address;
                element.pincode = req.body.pincode;
                element.state = req.body.state;
                element.hobby = req.body.hobby;
                // element=req.body;
            }
        }
        data_stringified = JSON.stringify(datac);
        fs.writeFile(path, data_stringified, "utf8", (err) => {
            if (err) {
                // return console.log(err);
            }
            // console.log('written to file');
        });
        res.status(200).send(`upadated user with id: ${req_id}`);
    })
});
app.delete('/user/:id', (req, res) => {
    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            // console.log("err", err)
            throw err;
        }
        const req_id = req.params["id"];
        // console.log("req_id", req_id);
        // console.log("typeof(data)", typeof (data));
        let datac = JSON.parse(data);
        console.log("datac", datac);
        // console.log("req.body", req.body);
        // console.log("typeof req body", typeof (req.body));
        // console.log("typeof(datac)", typeof (datac));
        // delete datac[req_id];
        let updated_datac = datac.filter(usr => usr.id != req_id);

        // for(let element of datac){
        //     if(element.id==req_id){
        //         delete element;
        //     }
        // }
        // console.log("datac updated=======", updated_datac);
        data_stringified = JSON.stringify(updated_datac);
        fs.writeFile(path, data_stringified, "utf8", (err) => {
            if (err) {
                // return console.log(err);
            }
            // console.log('written to file');
        });
        res.status(200).send(`deleted user with id: ${req_id} `);
    });
});


 app.listen(PORT, () => console.log(`listening on PORT ${PORT}!`));
