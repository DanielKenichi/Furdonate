const connection = require('../data/connection');
const crypto = require('crypto');

module.exports = {
    async CreateArtist(request, response){
        const {name, email, discord_server, country} = request.body;
        const id = crypto.randomBytes(4).toString('HEX'); 

        await connection('artist').insert({
            id,
            name,
            email, 
            discord_server,
            country,
        })
        
        return response.json({ id })
    },
    async GetArtists(request, response){
        const artists = await connection('artist').select('*');

        return response.json(artists);
    },
    async DeleteArtist(request, response){
        const{name: artistName} = request.body;
        const requester_id = request.headers.authorization;
        
        const artist_id = await connection('artist')
        .where('name', artistName)
        .select('id')
        .first();

        if(artist_id.id != requester_id){
            return response.status(401).json({ error: 'Unauthorized'});
        }

        await connection('artist').where('name', artistName).delete();

        return response.status(204).send();
    }
};