class TestYield{
    constructor(){

    }
    static *test(){
        setTimeout(function(){
            yield ('Hi')
        },5000)
    }
}


module.exports = TestYield