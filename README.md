# day-12-home
# Real time character counter

## Step 1: Create the HTML file

here we use html css and javascript to create character counter

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>

    
        <div id="box">
            <h1>Real-time Character Counter</h1>
            <textarea name="" id="text" cols="50" rows="10" placeholder="Please write your text here..." maxlength="50"></textarea >
            <div id="container">
                <p>Total charactes: <span id="rightcount">0</span></p>
                <p>Remaining : <span id="leftcount">50</span></p>
            </div>
        </div>
   <script src="./script.js"></script>
    
</body>
</html>

## now we create css and jss file
### jss
let textarea = document.getElementById('text');
let rc = document.getElementById('rightcount')
let lc = document.getElementById('leftcount')

textarea.addEventListener('keyup' , ()=>{

    count()

})

function count(){
    rc.innerText = textarea.value.length

    lc.innerText = textarea.getAttribute('maxlength')-textarea.value.length

### css
*{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

body{
    background-color: rgb(47, 202, 47);
}

#box{
    position: relative;
    width: 40vw;
    height: 50vh;
    background-color:rgb(197, 238, 114);
    left: 30%;
    margin-top: 130px;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 10px 5px rgb(242, 238, 238);
    color: palevioletred;
}

#text{
    width: 90%;
    height: 50%;
    font-size: 1.5rem;

}

p{
    font-size: 1.2rem;
}

#container{
    display: flex;
    justify-content: space-between;
}

## Step 3: Run the code

To run the code, open the HTML file in a web browser.


}
