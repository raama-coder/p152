AFRAME.registerComponent("car-model", {
    schema: {
      modelRef: { type: "string", default: "../assets/cartoon_car/scene.gltf" },
      clickCounter: { type: "number", default: 0 }
    },
    init: function() {
  
      this.el.setAttribute("gltf-model", this.data.modelRef);
      const position = { x: 0, y: 5, z: -10 };
      const rotation = { x: 0, y: 0, z: 20 };
      this.el.setAttribute("position", position);
      this.el.setAttribute("rotation", rotation);
    },
    update: function() {
      window.addEventListener("click", e => {
        this.data.clickCounter = this.data.clickCounter + 1;
  
        if (this.data.clickCounter === 1) {
          const rotation = { x: 20, y: 0, z: 0 };
          this.el.setAttribute("rotation", rotation);
        } else if (this.data.clickCounter === 2) {
          
          const rotation = { x: 100, y: 0, z: 0 };
          this.el.setAttribute("rotation", rotation);
        } else if (this.data.clickCounter === 3) {
          
          const rotation = { x: -200, y: 0, z: 0 };
          this.el.setAttribute("rotation", rotation);
        } else if (this.data.clickCounter === 4) {
          
          const rotation = { x: -100, y: 0, z: 0 };
          
          this.el.setAttribute("rotation", rotation);
          this.data.clickCounter = 0;
        }
      });
    }
  });