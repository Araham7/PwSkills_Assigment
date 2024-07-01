#This is Assigment_1 result
<img src="./images/Assigment_1_result.png" alt="resul_image">

# Html Code :
```HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assigment_1</title>
    <link rel="stylesheet" href="style.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

</head>
<body>
    <div class="container">
<!-- -------------nav_bar---------------- -->
        <nav aria-label="nav_bar" class="nav_bar" >
<!-- ---------------------------------------------------------- -->
        <!-- logo-section -->
        <div>
            <div class="log"><img src="./images/web_logo.png" alt="Website_logo" height="45px"></div>
        </div>
<!-- ---------------------------------------------------------- -->
        <!-- main-nav_icons -->
         <div>
            <ul class="main_nav">
                <li class="menu">Our Menu</li>
                <li class="maps">Maps</li>
                <li class="about">About</li>
                <li class="contact">Contact</li>
            </ul>
         </div>
<!-- ---------------------------------------------------------- -->
        <!-- order_btn -->
         <div>
            <button class="button">Order</button>
         </div>
<!-- ---------------------------------------------------------- -->
        </nav>


        <section aria-label="hero" class="main">
            <h1 class="main_txt">
                A Restaurant That Only Serves Delicious Food
            </h1>

            <button class="read_meanu">
                Read Our Menu
            </button>
        </section>

        <footer class="footer_btn">
            <img src="./images/scroll.png" alt="scroll_icon" height="90px">
        </footer>


        
    </div>
    
</body>
</html>

```



# Css Code :
```CSS

*{
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-style: normal;
}

body{
    margin: 0px;

    background-image: url('./images/body_img.png');
    background-repeat: no-repeat;
    background-size: cover;

    width: 100vw ;
    height: 100vh;
}

.container{
    display: flex;
    flex-direction: column;
}

.nav_bar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    margin-top: 15px;
    padding: 0 60px 0 60px;
}

ul li{
    list-style: none;
    padding: 9px 29px;
    font-weight: 600;
}

.main_nav{
    display: flex;
    flex-direction: row;
}

.main{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.main_txt{
    width: 700px;
    font-size: 400%;
    font-weight: 900;
}

button{
    background-color: #ff505f;
    padding: 7px 25px;
    font-weight: 600;

    color: #fff;
}

.footer_btn{
    position: absolute;
    bottom: 10px;
    right: 40px;
}

li,h1{
    color: #ffc233;
}

```
