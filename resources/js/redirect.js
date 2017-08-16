var count = 5;

function countdownAndRedirect()
{
    if (count > 1)
    {
        --count;
        setTimeout("countdownAndRedirect()", 1000);
        document.getElementById('numSec').innerHTML = count;
        if (count == 1)
        {
            document.getElementById('plur').innerHTML = "";
        }
    }
    else
    {
        window.location.href = "https://www.linkedin.com/in/allan-rodriguez-527152a1"
    }
}

countdownAndRedirect();
