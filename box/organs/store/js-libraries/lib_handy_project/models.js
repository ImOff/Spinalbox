// handy_project_model.js

function LightModel() {
    LightModel.super(this);

    this.add_attr({
	angle: 0,
	sunLight: 0,
	bulb: 0	
    });
}

spinalCore.extend(LightModel, Model);
