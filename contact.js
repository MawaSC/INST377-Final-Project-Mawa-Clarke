const express = require('express');
const supabaseClient = require('@supabase/supabase-js');
const bodyParser = require('body-parser');

const app = express()
const port = 3000;

app.use(bodyParser.json());

const path = require('path');
app.use(express.static(path.join(__dirname, '..', '/public')));
app.use(express.static(__dirname, + '/public'));
const supabaseURL = 'https://igeclhtwkyjjyficzjxi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnZWNsaHR3a3lqanlmaWN6anhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0NjM5OTYsImV4cCI6MjA2MzAzOTk5Nn0.MF4xIr0nymDqe5sXHQXG_xvj4OLUx5Cpw55lK-BSvTU';

const supabase = supabaseClient.createClient(supabaseURL, supabaseKey);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'contact.html'));
});

/*app.get('/users', async (req, res) => {
    console.log('Attempting to GET all users');

    const { data, error } = await supabase.from('users').select();

    if(error) {
        console.log(`Errors: ${error}`);
        res.statusCode = 400
        res.send(error);
    }

    res.send(data)
});*/

app.get('/users', async (req, res) => {
    console.log('Attempting to GET all users');

    const { data, error } = await supabase.from('users').select();

    if(error) {
        console.log(`Errors:`, error);
        return res.status(400).send(error);  // Return early to avoid sending twice
    }

    res.send(data);
});

app.post('/user', async(req, res) => {
    console.log('Adding User');
    const {name, email, phone, language, message} = req.body;

    const { data, error } = await supabase
        .from('contact')
        .insert([{'name': name, 'email': email, 'phone' : phone, 'language' : language, 'message' : message}]);

    if(error) {
        console.error('Error inserting user:', error);
        return res.status(500).json({ error: 'Failed to add user' });
    }

    console.log('User added:', data);
    console.log(req.body);

    res.status(200).json({ success: true});
    res.send();
});

app.listen(port, () => {
    console.log('App is Alive', port);
});