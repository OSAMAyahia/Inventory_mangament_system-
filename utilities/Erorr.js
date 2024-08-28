class Err extends Error{
    constructor(statuscode,message){
        super(message);
        this.statuscode=statuscode;
        this.isOperational=true
        this.status= statuscode.toString().startsWith('4') ? "fail" : "error";
 
    }
}

module.exports=Err