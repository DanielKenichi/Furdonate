const connection = require('../data/connection');

 module.exports = {
    async CreateDonation(request, response) {
        const {nickname, value, message} = request.body;
        const artist_id = request.headers.authorization;

        const [id] = await connection('donation').insert({
            nickname, 
            value,
            message,
            artist_id
        });

        return response.json({ id });
    },

    async GetDonations(request, response){
        const {page = 1} = request.query

        const [count] = await connection('donation').count();
        
        const donations = await connection('donation')
        .join('artist', 'artist.id', '=', 'donation.artist_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select(['donation.*',
                 'artist.name', 
                 'artist.email', 
                 'artist.discord_server', 
                 'artist.country']);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(donations);
    },
    async DeleteDonation(request, response){
        const{id} = request.params;
        const requester_id = request.headers.authorization;
        
        const artist_id = await connection('donation')
        .where('id', id)
        .select('artist_id')
        .first();

        if(artist_id.artist_id != requester_id){
            return response.status(401).json({ error: 'Unauthorized'});
        }

        await connection('donation').where('id', id).delete();

        return response.status(204).send();
    }
 };