import connection from '@/server/database/Connection.js';

export default async function handler(req, res) {
    const { method } = req;
    console.log(req);

    connection.query('SELECT * FROM account', (error, results) => {
        if (error) {
            console.log('Error retrieving data:', error);
            res.status(500).json({ error });
            return;
        }
        res.status(200).json({ data: results });
    });
}

// Kumbaga yung Res yan yung mag sesend ng data and yung api is the middle end and will not be access by others