class scorePanel{
    score:number = 0
    level:number = 1
    scoreEle: HTMLElement
    levelEle: HTMLElement
    maxLevel: number
    upScore: number
    constructor(maxLevel: number = 10, upScore:number = 10){
        this.scoreEle = document.getElementById("score")!   //！表示不可能为空
        this.levelEle = document.getElementById("level")!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }
    addScore(){
        if(this.score % this.upScore === 0){
            this.score++
            this.scoreEle.innerHTML = this.score + ''
        }
    }
    levelUp(){
        if(this.level < this.maxLevel){
            this.level++
            this.levelEle.innerHTML = this.level + ''
        }
    }
}

export default scorePanel