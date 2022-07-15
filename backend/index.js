const connect = require("./database");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());
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
    console.log('hfhfhn');
    let date = new Date().toISOString().slice(0, 10);
    let description = req.body.description;
    let type = req.body.type;
    let amount = req.body.amount;
    // let running_balance = 0;
    // if (running_balancec == 0)
    connect.query("select *from transaction ORDER BY id DESC LIMIT 1", (err, result) => {

        if (err) {
            res.status(400).json({
                status: 400,
                message: err,
            });
        } else {
            // console.log(result[0].running_balance);
            var balance = 0;
            if (result.length) {
                balance = result[0].running_balance;
            }
            if (type == 'credit') {
                balance = parseInt(balance) + parseInt(amount);
            } else if (type == 'debit') {
                if (parseInt(balance) >= parseInt(amount)) {
                    balance = parseInt(balance) - parseInt(amount);
                }else{
                    res.status(400).json({
                        status: 400,
                        message: "Insuficient Balance",
                    });
                    return;
                }
            }
            var sql = `INSERT INTO transaction (date,description,amount,type,running_balance) VALUES ( '${date}','${description}', ${amount},'${type}','${balance}')`;
            console.log(sql);
            connect.query(sql, (err, result) => {
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
        }
    });
});

app.listen(PORT, () => {
    console.log("Server Running");
});