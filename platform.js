class Platform{
    constructor(x, y, w){
    
        this.collider = createSprite(x, y - 0.5, w, displayHeight / 360)
        this.collider.visible = false
        this.collider.shapeColor = "red"

        this.sprite = createSprite(x, y, w, displayHeight / 360)
        this.sprite.visible = false

        tgroup.add(this.sprite)
        collidergroup.add(this.collider)
        
    }
}