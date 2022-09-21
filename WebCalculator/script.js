function buttonPressed(int_Value)
{
    document.getElementById("screen").style.color='white'
    document.getElementById("screen").value=document.getElementById("screen").value+int_Value
}

function clearButton()
{
    document.getElementById("screen").value=""
}

function equalButton()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").style.color='red'
    document.getElementById("screen").value=result
}