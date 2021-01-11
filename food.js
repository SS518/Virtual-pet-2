class Food {
    constructor(x,y){
    var FoodS,lastfed;


    this.x = x
    this.y = y
        this.image=loadImage("images/Milk.png")
       this.image.resize(30,30)

       image(this.image,10,10)
        this.image.resize(100,100)
    }

    getFoodStock(){
       var foodStock=database.ref('Food');
        foodStock.on("value",function(data){
            foodStock = data.val();
        })
        }

    updateFoodStock(count){
         database.ref('/').update({
           foodStock: count
        });
        }
    deductFood(){
        function writeStock(x){
            if(x<=0){
              x=0;
            }else{
              x=x-1;
            } 
            database.ref('/').update({
              Food:x
            })
          }
    }

    display(){
      
        image(this.image,0,30)
        this.image.resize(100,100)

        image(this.image,40,30)
        this.image.resize(100,100)

        image(this.image,80,30)
        this.image.resize(100,100)

        image(this.image,120,30)
        this.image.resize(100,100)

        image(this.image,160,30)
        this.image.resize(100,100)

        image(this.image,200,30)
        this.image.resize(100,100)

        image(this.image,240,30)
        this.image.resize(100,100)

        image(this.image,280,30)
        this.image.resize(100,100)

        image(this.image,320,30)
        this.image.resize(100,100)

        image(this.image,360,30)
        this.image.resize(800,100)

        image(this.image,370,30)
        this.image.resize(100,100)

        image(this.image,400,30)
        this.image.resize(100,100)

        image(this.image,0,130)
        this.image.resize(100,100)

        image(this.image,40,130)
        this.image.resize(100,100)

        image(this.image,80,130)
        this.image.resize(100,100)
    }
}