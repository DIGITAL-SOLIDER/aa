AFRAME.registerComponent("cm", {
    schema: {
        cc: { type: "number", default: 1 },
    },

    update: function() {
        window.addEventListener("click", e => {
            var rotation = this.el.getAttribute("rotation")
            this.data.cc=this.data.cc + 1
            if (this.data.cc === 1) {
                const rotation={ x: 0, y: 20, z: 0}
                this.el.setAttribute("rotation",rotation)
            }else if (this.data.cc === 2){
                const rotation={ x: 0, y: 100, z: 0}
            }
          })
    }
});