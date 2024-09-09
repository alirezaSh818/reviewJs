
console.log("connected...");

//object

var Course={
    title:"javaScript",
    teacher: "ahmadPoormokhber",
    level:1,
    view:0,
    updateView:function(){
        return ++Course.view;
    }
}

console.log(Course.view);
Course.updateView();
console.log(Course.view);

