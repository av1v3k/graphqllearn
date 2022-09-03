const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP; // stick with captilization.
var cors = require('cors')
const schema = require('./schema/schema');

const app = express();
const PORT = 3500;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello");
})

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})