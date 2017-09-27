import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
const dbUrl = 'mongodb://localhost/elmenus';

function validate(data) {
    let errors = {};
    if (data.title === '') errors.title = "Can't be empty";
    if (data.cover === '') errors.cover = "Can't be empty";
    const isValid = Object.keys(errors).length === 0
    return { errors, isValid };
}

mongodb.MongoClient.connect(dbUrl, function(err, db) {

    app.get('/api/menu_categories', (req, res) => {
        db.collection('menu_categories').find({}).toArray((err, menu_categories) => {
            res.json({ menu_categories });
        });
    });

    app.get('/api/menu_category_items', (req, res) => {
        db.collection('menu_category_items').find({}).toArray((err, menu_category_items) => {
            res.json({ menu_category_items });
        });
    });

    app.post('/api/menu_categories', (req, res) => {
        const { errors, isValid } = validate(req.body);
        if (isValid) {
            const { english_name, english_description } = req.body;
            db.collection('menu_categories').insert({ english_name, english_description }, (err, result) => {
                if (err) {
                    res.status(500).json({ errors: { global: "Something went wrong" }});
                } else {
                    res.json({ menu_categories: result.ops[0] });
                }
            });
        } else {
            res.status(400).json({ errors });
        }
    });

    app.post('/api/menu_category_items', (req, res) => {
        const { errors, isValid } = validate(req.body);
        if (isValid) {
            const { item_name, item_price , item_description , category_id } = req.body;
            db.collection('menu_category_items').insert({ item_name, item_price , item_description , category_id  }, (err, result) => {
                if (err) {
                    res.status(500).json({ errors: { global: "Something went wrong" }});
                } else {
                    res.json({ menu_category_items: result.ops[0] });
                }
            });
        } else {
            res.status(400).json({ errors });
        }
    });

    app.put('/api/menu_categories/:_id', (req, res) => {
        const { errors, isValid } = validate(req.body);

        if (isValid) {
            const { english_name, english_description } = req.body;
            db.collection('menu_categories').findOneAndUpdate(
                { _id: new mongodb.ObjectId(req.params._id) },
                { $set: { english_name, english_description } },
                { returnOriginal: false },
                (err, result) => {
                    if (err) { res.status(500).json({ errors: { global: err }}); return; }

                    res.json({ menu_category: result.value });
                }
            );
        } else {
            res.status(400).json({ errors });
        }
    });

    app.put('/api/menu_category_items/:_id', (req, res) => {
        const { errors, isValid } = validate(req.body);

        if (isValid) {
            const { item_name, item_price , item_description , category_id } = req.body;
            db.collection('menu_category_items').findOneAndUpdate(
                { _id: new mongodb.ObjectId(req.params._id) },
                { $set: { item_name, item_price , item_description , category_id } },
                { returnOriginal: false },
                (err, result) => {
                    if (err) { res.status(500).json({ errors: { global: err }}); return; }

                    res.json({ menu_category_item: result.value });
                }
            );
        } else {
            res.status(400).json({ errors });
        }
    });
    app.get('/api/menu_categories/:_id', (req, res) => {
        db.collection('menu_categories').findOne({ _id: new mongodb.ObjectId(req.params._id) }, (err, menu_category) => {
            res.json({ menu_category });
        })
    });
    app.get('/api/menu_category_items/:_id', (req, res) => {
        db.collection('menu_category_items').findOne({ _id: new mongodb.ObjectId(req.params._id) }, (err, menu_category_item) => {
            res.json({ menu_category_item });
        })
    });
    app.delete('/api/menu_categories/:_id', (req, res) => {
        db.collection('menu_categories').deleteOne({ _id: new mongodb.ObjectId(req.params._id) }, (err, r) => {
            if (err) { res.status(500).json({ errors: { global: err }}); return; }

            res.json({});
        })
    });

    app.delete('/api/menu_category_items/:_id', (req, res) => {
        db.collection('menu_category_items').deleteOne({ _id: new mongodb.ObjectId(req.params._id) }, (err, r) => {
            if (err) { res.status(500).json({ errors: { global: err }}); return; }

            res.json({});
        })
    });

    app.use((req, res) => {
        res.status(404).json({
            errors: {
                global: "Still working on it. Please try again later when we implement it"
            }
        });
    })

    app.listen(8080, () => console.log('Server is running on localhost:8080'));

});
