let username1=document.getElementById("username");
let userpwd1=document.getElementById("userpwd");
let uname=document.getElementById("uname");
let upwd=document.getElementById("upwd");
let login2=document.getElementById("login2");
let zuce=document.getElementById("zuce");
let loginbox=document.getElementById("loginbox");
let zuce2=document.getElementById("zuce2");
let zucebox=document.getElementById("zucebox");
zuce.onclick = function(){
    zucebox.style.display = "block";
    loginbox.style.display = "none";
}
zuce2.onclick=function(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            if(xhr.responseText==1){
                alert("恭喜您，注册成功")
                loginbox.style.display ="block";
                zucebox.style.display = "none";
            }else{
                alert("注册失败，请重新输入")
                        
            }
        }
    }
    let unames = uname.value;
    let  upwds =  upwd.value;
    console.log(unames)
    console.log(upwds)
    xhr.open("GET",`/zuce?username=${unames}&userpwd=${upwds}`,true);
    xhr.send()
}
login2.onclick=function(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            if(xhr.responseText==1){
                alert("恭喜您，登录成功")
                window.location.href="http://localhost:3100/page/index.html";
            }else{
                alert("用户名或者密码错误")
                        
            }
        }
    }
    let username = username1.value;
    let  userpwd =  userpwd1.value;
    // console.log(username)
    // console.log(userpwd)
    xhr.open("GET",`/login?username=${username}&userpwd=${userpwd}`,true);
    xhr.send()
}