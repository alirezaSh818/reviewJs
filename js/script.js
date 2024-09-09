
console.log("connected...");

//object constructor

function Course(title,teacher,level,isActive,view){

    this.title=title,
    this.teacher=teacher,
    this.level=level,
    this.isActive=isActive,
    this.view=view,
    this.updateViews=function(){
        return ++this.view;
    }
}
 var Course1 = new Course("JS","ali",1,true,0);
 console.log(Course1.view);
 Course1.updateViews();
 console.log(Course1.view);
