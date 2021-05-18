class GreenBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
        fill(97,200,206);
        super.display();
    }
}