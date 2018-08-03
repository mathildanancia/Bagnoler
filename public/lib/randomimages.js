
        $(document).ready( function(){
            $(".image_Box").click(function(){
                var random_Number = Math.floor(Math.random()*129);// Change le 5 par ton nombre d'image
                var image = "images/image"+ random_Number +".jpg";
                // console.log(image);
                // console.log(random_Number);
                $(".image").attr("src", image);
            });
        });

