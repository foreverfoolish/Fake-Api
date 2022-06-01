const express =  require('express');
const app = express();
const PORT = 8080;
var id_ =0;

function randomGenerator(size) {
    let result = [];
    let firstValue = Math.round(Math.random() * 100);
    result.push(firstValue);
    
    for (let i=0;i<size-1;i++){
        firstValue += Math.random() > 0.5 ? 1:-1;
        result.push(firstValue)
    }
    return result;
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

app.use(express.json())

app.get(
    '/POS',  (req,res)=>{
        res.status(200).send({
            "POS": {
                "text": "",
                "language":"",
                "model":"",
                "tokens":[],
            }
        })
    }
);

app.post('/POS', (req,res)=>{
    var {id} = req.params;
    const {text} = req.body;
    const {language} = req.body;
    const {model} = req.body;
    const {list} = req.body;
    const arr = randomGenerator(10);
    if(!id){
        id = id_;
        id_++;
    }

    res.send({
        "POS": {
            "text": makeid(5),
            "language":makeid(5),
            "model":arr,
            "tokens":randomGenerator(10),
        }
    })
})

app.post('/gender', (req,res)=>{
    var {id} = req.params;
    const {text} = req.body;
    const {language} = req.body;
    const {model} = req.body;
    const {list} = req.body;
    const arr = randomGenerator(10);

    if(!id){
        id = id_;
        id_++;
    }

    res.send({
        "gender": {
            "text": makeid(5),
            "language":makeid(5),
            "model":arr,
            "tokens":randomGenerator(10),
        }
    })
})

app.post('/number', (req,res)=>{
    var {id} = req.params;
    const {text} = req.body;
    const {language} = req.body;
    const {model} = req.body;
    const {list} = req.body;
    const arr = randomGenerator(10);

    if(!id){
        id = id_;
        id_++;
    }

    res.send({
        "number": {
            "text": makeid(5),
            "language":makeid(5),
            "model":arr,
            "tokens":randomGenerator(10),
        }
    })
})

app.post('/person', (req,res)=>{
    var {id} = req.params;
    const {text} = req.body;
    const {language} = req.body;
    const {model} = req.body;
    const {list} = req.body;
    const arr = randomGenerator(10);

    if(!id){
        id = id_;
        id_++;
    }

    res.send({
        "person": {
            "text": makeid(5),
            "language":makeid(5),
            "model":arr,
            "tokens":randomGenerator(10),
        }
    })
})

app.post('/case', (req,res)=>{
    var {id} = req.params;
    const {text} = req.body;
    const {language} = req.body;
    const {model} = req.body;
    const {list} = req.body;
    const arr = randomGenerator(10);

    if(!id){
        id = id_;
        id_++;
    }

    res.send({
        "case": {
            "text": makeid(5),
            "language":makeid(5),
            "model":arr,
            "tokens":randomGenerator(10),
        }
    })
})

app.post('/vib', (req,res)=>{
    var {id} = req.params;
    const {text} = req.body;
    const {language} = req.body;
    const {model} = req.body;
    const {list} = req.body;
    const arr = randomGenerator(10);

    if(!id){
        id = id_;
        id_++;
    }

    res.send({
        "vib": {
            "text": makeid(5),
            "language":makeid(5),
            "model":arr,
            "tokens":randomGenerator(10),
        }
    })
})

app.post('/root', (req,res)=>{
    var {id} = req.params;
    const {text} = req.body;
    const {language} = req.body;
    const {model} = req.body;
    const {list} = req.body;
    const arr = randomGenerator(10);

    if(!id){
        id = id_;
        id_++;
    }

    res.send({
        "root": {
            "text": makeid(5),
            "language":makeid(5),
            "model":arr,
            "tokens":randomGenerator(10),
        }
    })
})

app.post('/lcat', (req,res)=>{
    var {id} = req.params;
    const {text} = req.body;
    const {language} = req.body;
    const {model} = req.body;
    const {list} = req.body;
    const arr = randomGenerator(10);

    if(!id){
        id = id_;
        id_++;
    }

    res.send({
        "lcat": {
            "text": makeid(5),
            "language":makeid(5),
            "model":arr,
            "tokens":randomGenerator(10),
        }
    })
})


app.listen(
    PORT,
    ()=> console.log(`it's alive on http://localhost:${PORT}`)
)