const newPlayer = (socket, player) => {
    socket.on('connect', () => {
        socket.emit('new-player', {
            x: player.sprite.body.x,
            y: player.sprite.body.y,
            angle: player.sprite.rotation,
            playrName: {
                name: String(socket.id),
                x: player.playerName.x,
                y: player.playerName.y
            },
            speed: {
                valu: PaymentRequest.speed,
                x: player.speed,
                y: player.speed.y
            }
        })
    })
}

export default newPlayer 