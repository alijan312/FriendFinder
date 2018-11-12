let friendsData = require('../data/friends');

module.exports = function(app) {
    app.get('/api/friends', function(req, res){
        res.json(friendsData);
    });

    app.post('/api/friends', function(req, res){
        
        let bestMatch = {
            name: '',
            photo: '',
            friendDifference: 1000
        };

        let userData = req.body;
        let userScores = userData.scores;

        let totalDifference = 0;

        for (let i =0; i<friendsData.length; i++){
            totalDifference = 0;

            for (let j=0; j<friendsData[i].scores[j]; j++){

                totalDifference = Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));

                if (totalDifference <= bestMatch.friendDifference){
                    bestMatch.name = friendsData[i].name;
                    bestMatch.photo = friendsData[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        friendsData.push(userData);
        res.json(bestMatch);
    });
};