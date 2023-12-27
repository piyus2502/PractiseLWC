import { LightningElement } from 'lwc';

export default class Parentcomp extends LightningElement {
    studentName;
    parentsemilega=50;
    crdetail = [
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card",
            description : "First card description."
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card",
            description : "second card description."
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "third Card",
            description : "Third card description."
        }
    ]
    inputhandler(event){
        this.studentName = event.target.value;
    }
    numberbhej(event){
        this.parentsemilega = parseInt(event.target.value);
    }
    resetkar(){
        this.template.querySelector('c-child-comp').resetprogress();
    }
}