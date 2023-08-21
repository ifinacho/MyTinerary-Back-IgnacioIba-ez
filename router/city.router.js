import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        cities:[
            {name : "San Salvador de Jujuy"},
            {name : "Palpala"},
            {name : "Perico"},
            {name : "San Pedro de Jujuy"},
            {name : "Fraile Pintado"},
            {name : "Libertador General San Martin"} 
        ]
    });
});

export default router;