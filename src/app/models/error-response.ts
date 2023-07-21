export class Errorresponse {
    /**
     *
     */
    constructor(msg:string,fl:string='',statusCode:number=500) {
        this.ErrorMsg= msg;
        this.FullLog=fl;
        this.StatusCode=statusCode;
    }
    ErrorMsg: string='';
    FullLog?: string;
    StatusCode?: number;
}