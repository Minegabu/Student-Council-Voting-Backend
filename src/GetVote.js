// import things
const users = require('./models/users')

const GetVote = async (request, response) => {
    try {
        // find all the votes
        const vote = await users.find({}, { candidate_vote: 1, _id: 0 }).sort({ candidate_vote: 1 })
        const vote2 = vote.map((vote) => vote.candidate_vote)
        console.log(vote2)
        var counts = {};
        counts.sort(function (first, second) {
            return second[1] - first[1];
        });
        vote2.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
        return response.status(200).json({ success: true, data: counts })
    } catch (err) {
        // if it fails to find all the votes
        console.log(err)
        return response.status(400).json({ success: false, data: false })
    }
}
// exporting the function
module.exports = { GetVote }