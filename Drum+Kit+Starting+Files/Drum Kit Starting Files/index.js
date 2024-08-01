var btn = document.querySelectorAll(".drum");
for(var i = 0; i < btn.length; i++)
{
    btn[i].addEventListener("click", function () 
        {
            alert("hello");
        }
    );
}