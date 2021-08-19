class Loader{
    constructor(length, node, bg, size){
        this.length = length;
        this.node = node;
        this.bg = bg;
        this.size = size;
    }
    loader = document.createElement("div")
    center = document.createElement("div");

    createLoader = () => {
        this.loader.className = "loader";
        this.center.className = "center";
        this.center.style.background = this.bg;
        this.loader.style = `
            width: ${this.size}rem;
            height: ${this.size}rem;
        `;
        this.loader.appendChild(this.center);
        return this.center;
    }

    load(){
        var spin = this.createLoader();
        for (var i = 0; i < this.length; i++){
            spin.innerHTML += `
                <div class='circle spin' style='
                    animation-delay: ${i}ms;
                '></div>
            `;
            
            this.node.appendChild(this.loader);
        }
        

    }
    
}
