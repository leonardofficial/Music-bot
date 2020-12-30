module.exports = (client, message, track) => {
    if (client.player.getQueue(message).previousTracks.length === 0 && client.player.getQueue(message).tracks.length <= 1)
        message.channel.send(`${client.emotes.music} - Now playing ${track.title}`);
};