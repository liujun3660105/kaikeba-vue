class Bus {
    constructor(){
        this.callbacks={};
    }
    $on(name,cb){
        this.callbacks[name] = this.callbacks[name] || [];
        this.callbacks[name].push(cb);
    }
    $emit(name,args){
        if(this.callbacks[name]){
            this.callbacks[name].forEach(cb => {
                cb(args);
            });
        }

    }
}
export default Bus;