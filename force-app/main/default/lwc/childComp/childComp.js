import { LightningElement, api } from 'lwc';

export default class ChildComp extends LightningElement {
    @api studentName='Piyus';
    @api crdetail;
    @api parentsemilega;

    @api resetprogress(){
        this.parentsemilega = parseInt(50);
    }
}