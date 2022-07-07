const connect = require("./database");

const express = require("express");

const bodyParser = require("body-parser");



const app = express();

app.use(bodyParser.json());

const PORT = 8090;


app.get("/get-transactions", (req, res) => {

    connect.query("select *from transaction", (err, result) => {

        if (err) {

            res.status(400).json({

                status: 400,

                message: err,

            });

        } else {

            res.status(200).json({

                status: 200,

                message: "your all transctions",

                data: result,

            });

        }

    });

});

app.post("/running-transaction", (req, res) => {

    let date = req.body.date;

    let description = req.body.description;

    let credit = req.body.credit;

    let debit = req.body.debit;

    let runningBalance = req.body.runningBalance;

    // console.log(req.body);

    // if(runningBalance <= debit)

    var sql = `INSERT INTO transaction (date,description,credit,debit,runningBalance) VALUES ('${date}','${description}', '${credit}','${debit}','${runningBalance}')`;



    connect.query(sql, (err, result) => {

        // if (err) throw err;

        if (err) {

            res.status(400).json({

                status: 400,

                message: err,

            });

        } else {

            res.status(200).json({

                status: 200,

                message: "successfully inserted",

                data: result,

            });

        }

    });

});



app.listen(PORT, () => {

    console.log("Server Running");

});