module.exports = (client, message, queue, track) => {
    if (client.player.getQueue(message).tracks.length === 2) {
        message.channel.send(`${client.emotes.music} - ${track.title} has been added to the queue !` + " There is **1 song** before you.");
    } else {
        message.channel.send(`${client.emotes.music} - ${track.title} has been added to the queue !` + " There are **" + (client.player.getQueue(message).tracks.length - 1) + " songs** before you.");
    }
};