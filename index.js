console.log('hi from node!!))');

const number1 = 5;
const number2 = 12;
console.log(number1+number2);

class Article{
    constructor(content){
        this.content = content;
    }
    render(){
        return this.content;
    }
}

const newArticle = new Article('Content for article!')
console.log(newArticle.render());
