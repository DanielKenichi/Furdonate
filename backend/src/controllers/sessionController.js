const connection = require('../data/connection');

module.exports = {
    async Login(request, response){
        const { id } = request.body;

        const artist = await connection('artist')
        .where('id', id)
        .select('name')
        .first();

        if(!artist){
            return response.status(400).json({error: 'No artist was found with this id'});
        }

        return response.json({artist});
    }
};