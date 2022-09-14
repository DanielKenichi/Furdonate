const connection = require('../data/connection');

module.exports = {
    async GetArtistsDonations(request, response){
        const artist_id = request.headers.authorization

        const donations = await connection('donation')
        .where('artist_id', artist_id)
        .select('*');

        return response.json(donations);
    }
};