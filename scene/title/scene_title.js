class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        var label = GuaLabel.new(game, 'hello')
        // game.registerAction('k', function(){
        //     var s = Scene(game)
        //     game.replaceScene(s)
        // })
        this.addElement(label)
        var ps = GuaParticleSystem.new(game)
        this.addElement(ps)
    }
    // draw() {
    //     super.draw()
    //     // draw labels
    //     // this.game.context.fillText('按 k 开始游戏', 100, 190)
    // }
}
