import './style/index.less'

class Food{
    element: HTMLElement
    constructor(){
        this.element = document.getElementById("food")!
    }

    get X(){
        return this.element.offsetLeft
    }
    get Y(){
        return this.element.offsetTop
    }
    change(){
        let top = Math.floor(Math.random() * 30) * 10
        let left = Math.floor(Math.random() * 30) * 10
        this.element.style.top = top + "px"
        this.element.style.left = left + "px"
    }
}

class scorePanel{
    score:number = 0
    level:number = 1
    scoreEle: HTMLElement
    levelEle: HTMLElement
    maxLevel: number
    constructor(maxLevel: number = 10){
        this.scoreEle = document.getElementById("score")!   //！表示不可能为空
        this.levelEle = document.getElementById("level")!
        this.maxLevel = maxLevel
    }
    addScore(){
        this.score++
        this.scoreEle.innerHTML = this.score + ''
    }
    levelUp(){
        if(this.level < this.maxLevel){
            this.level++
            this.levelEle.innerHTML = this.level + ''
        }
    }
}

const ScorePanel = new scorePanel()
ScorePanel.addScore()
ScorePanel.addScore()