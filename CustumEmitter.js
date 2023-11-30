const EventEmitter=require('node:events');
module.exports=class shop extends EventEmitter{
    constructor(){
        super();
        this.orderNo=0;
    }
    order(size,toppings){
        this.orderNo++;
        this.emit('order',size,toppings);
    }
    displayOrderNumber(){
        console.log(this.orderNo);
    }
}