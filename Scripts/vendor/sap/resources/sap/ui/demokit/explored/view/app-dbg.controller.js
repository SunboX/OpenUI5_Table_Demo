/*!
 * @copyright@
 */

sap.ui.controller("sap.ui.demokit.explored.view.app", {

	onInit : function () {

		this._afterRenderingDone = false;

		// subscribe to app events
		this._component = sap.ui.core.Component.getOwnerComponentFor(this.getView());
		this._component.getEventBus().subscribe("app", "applyAppConfiguration", this._applyAppConfiguration, this);
	},

	onAfterRendering : function () {
		if (this.hasOwnProperty("_compactOn")) {
			this.getView().toggleStyleClass("sapUiSizeCompact", this._compactOn);
		}
		if (this.hasOwnProperty("_themeActive")) {
			sap.ui.getCore().applyTheme(this._themeActive);
		}
		this._afterRenderingDone = true;
	},
	
	_applyAppConfiguration : function(sChannel, sEvent, oData){
		if (this._afterRenderingDone){
			//handle themeChange
			sap.ui.getCore().applyTheme(oData.themeActive);
			//handle compact mode
			this.getView().toggleStyleClass("sapUiSizeCompact", oData.compactOn);
		} else {
			this._themeActive = oData.themeActive;
			this._compactOn = oData.compactOn;
		}
			
	}
});